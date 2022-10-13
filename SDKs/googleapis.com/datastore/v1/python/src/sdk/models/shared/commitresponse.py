from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import mutationresult


@dataclass_json
@dataclass
class CommitResponse:
    commit_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'commitTime' }})
    index_updates: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'indexUpdates' }})
    mutation_results: Optional[List[mutationresult.MutationResult]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mutationResults' }})
    

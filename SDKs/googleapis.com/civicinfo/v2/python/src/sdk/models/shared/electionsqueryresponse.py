from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import election


@dataclass_json
@dataclass
class ElectionsQueryResponse:
    elections: Optional[List[election.Election]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'elections' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    

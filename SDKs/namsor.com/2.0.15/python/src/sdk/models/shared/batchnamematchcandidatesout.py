from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import namematchcandidatesout


@dataclass_json
@dataclass
class BatchNameMatchCandidatesOut:
    names_and_match_candidates: Optional[List[namematchcandidatesout.NameMatchCandidatesOut]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'namesAndMatchCandidates' }})
    

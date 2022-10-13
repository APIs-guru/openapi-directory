from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import namematchcandidateout


@dataclass_json
@dataclass
class NameMatchCandidatesOut:
    first_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'firstName' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    last_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastName' }})
    match_candidates: Optional[List[namematchcandidateout.NameMatchCandidateOut]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'matchCandidates' }})
    order_option: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'orderOption' }})
    script: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'script' }})
    

from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import constraint


@dataclass_json
@dataclass
class ListAvailableOrgPolicyConstraintsResponse:
    constraints: Optional[List[constraint.Constraint]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'constraints' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    

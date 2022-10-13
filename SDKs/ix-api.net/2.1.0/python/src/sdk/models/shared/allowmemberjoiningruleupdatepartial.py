from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AllowMemberJoiningRuleUpdatePartial:
    capacity_max: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'capacity_max' }})
    capacity_min: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'capacity_min' }})
    consuming_account: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'consuming_account' }})
    external_ref: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'external_ref' }})
    managing_account: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'managing_account' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

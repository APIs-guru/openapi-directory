from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DenyMemberJoiningRuleUpdate:
    consuming_account: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'consuming_account' }})
    external_ref: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'external_ref' }})
    managing_account: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'managing_account' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

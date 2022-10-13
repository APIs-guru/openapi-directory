from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import userowneddrydocknote


@dataclass_json
@dataclass
class Attestor:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'etag' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    user_owned_drydock_note: Optional[userowneddrydocknote.UserOwnedDrydockNote] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userOwnedDrydockNote' }})
    

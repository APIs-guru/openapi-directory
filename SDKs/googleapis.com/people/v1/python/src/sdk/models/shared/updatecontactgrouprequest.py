from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import contactgroup


@dataclass_json
@dataclass
class UpdateContactGroupRequest:
    contact_group: Optional[contactgroup.ContactGroup] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contactGroup' }})
    read_group_fields: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'readGroupFields' }})
    update_group_fields: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateGroupFields' }})
    

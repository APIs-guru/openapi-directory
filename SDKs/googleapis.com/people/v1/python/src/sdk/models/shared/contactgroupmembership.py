from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ContactGroupMembership:
    contact_group_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contactGroupId' }})
    contact_group_resource_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contactGroupResourceName' }})
    

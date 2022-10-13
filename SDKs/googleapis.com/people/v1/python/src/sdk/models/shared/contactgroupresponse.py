from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import contactgroup
from . import status


@dataclass_json
@dataclass
class ContactGroupResponse:
    contact_group: Optional[contactgroup.ContactGroup] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contactGroup' }})
    requested_resource_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestedResourceName' }})
    status: Optional[status.Status] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    

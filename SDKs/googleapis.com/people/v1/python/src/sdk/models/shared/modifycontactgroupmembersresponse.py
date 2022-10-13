from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ModifyContactGroupMembersResponse:
    can_not_remove_last_contact_group_resource_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'canNotRemoveLastContactGroupResourceNames' }})
    not_found_resource_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notFoundResourceNames' }})
    

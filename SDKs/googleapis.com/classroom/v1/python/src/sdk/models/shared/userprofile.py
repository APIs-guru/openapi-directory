from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import name
from . import globalpermission


@dataclass_json
@dataclass
class UserProfile:
    email_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'emailAddress' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[name.Name] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    permissions: Optional[List[globalpermission.GlobalPermission]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'permissions' }})
    photo_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'photoUrl' }})
    verified_teacher: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'verifiedTeacher' }})
    

from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class UserPicture:
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class User:
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    email_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'emailAddress' }})
    is_authenticated_user: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isAuthenticatedUser' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    permission_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'permissionId' }})
    picture: Optional[UserPicture] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'picture' }})
    

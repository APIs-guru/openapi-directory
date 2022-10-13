from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class BlogPerUserInfoRoleEnum(str, Enum):
    VIEW_TYPE_UNSPECIFIED = "VIEW_TYPE_UNSPECIFIED"
    READER = "READER"
    AUTHOR = "AUTHOR"
    ADMIN = "ADMIN"


@dataclass_json
@dataclass
class BlogPerUserInfo:
    blog_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'blogId' }})
    has_admin_access: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hasAdminAccess' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    photos_album_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'photosAlbumKey' }})
    role: Optional[BlogPerUserInfoRoleEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'role' }})
    user_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userId' }})
    

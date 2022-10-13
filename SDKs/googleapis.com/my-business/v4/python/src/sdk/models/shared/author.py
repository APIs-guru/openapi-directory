from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class AuthorTypeEnum(str, Enum):
    AUTHOR_TYPE_UNSPECIFIED = "AUTHOR_TYPE_UNSPECIFIED"
    REGULAR_USER = "REGULAR_USER"
    LOCAL_GUIDE = "LOCAL_GUIDE"
    MERCHANT = "MERCHANT"


@dataclass_json
@dataclass
class Author:
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    profile_photo_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'profilePhotoUrl' }})
    type: Optional[AuthorTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class AuthorTypeEnum(str, Enum):
    AUTHOR_TYPE_UNSPECIFIED = "AUTHOR_TYPE_UNSPECIFIED"
    REGULAR_USER = "REGULAR_USER"
    LOCAL_GUIDE = "LOCAL_GUIDE"
    MERCHANT = "MERCHANT"


@dataclass_json
@dataclass
class Author:
    r"""Author
    Represents the author of a question or answer
    """
    
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    profile_photo_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('profilePhotoUri') }})
    type: Optional[AuthorTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

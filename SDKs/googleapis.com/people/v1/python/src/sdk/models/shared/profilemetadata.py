from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ProfileMetadataObjectTypeEnum(str, Enum):
    OBJECT_TYPE_UNSPECIFIED = "OBJECT_TYPE_UNSPECIFIED"
    PERSON = "PERSON"
    PAGE = "PAGE"

class ProfileMetadataUserTypesEnum(str, Enum):
    USER_TYPE_UNKNOWN = "USER_TYPE_UNKNOWN"
    GOOGLE_USER = "GOOGLE_USER"
    GPLUS_USER = "GPLUS_USER"
    GOOGLE_APPS_USER = "GOOGLE_APPS_USER"


@dataclass_json
@dataclass
class ProfileMetadata:
    r"""ProfileMetadata
    The metadata about a profile.
    """
    
    object_type: Optional[ProfileMetadataObjectTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('objectType') }})
    user_types: Optional[List[ProfileMetadataUserTypesEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userTypes') }})
    

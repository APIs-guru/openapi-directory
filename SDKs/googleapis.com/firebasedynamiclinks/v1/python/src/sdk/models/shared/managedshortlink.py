from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class ManagedShortLinkFlaggedAttributeEnum(str, Enum):
    UNSPECIFIED_ATTRIBUTE = "UNSPECIFIED_ATTRIBUTE"
    SPAM = "SPAM"

class ManagedShortLinkVisibilityEnum(str, Enum):
    UNSPECIFIED_VISIBILITY = "UNSPECIFIED_VISIBILITY"
    UNARCHIVED = "UNARCHIVED"
    ARCHIVED = "ARCHIVED"
    NEVER_SHOWN = "NEVER_SHOWN"


@dataclass_json
@dataclass
class ManagedShortLink:
    r"""ManagedShortLink
    Managed Short Link.
    """
    
    creation_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creationTime') }})
    flagged_attribute: Optional[List[ManagedShortLinkFlaggedAttributeEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('flaggedAttribute') }})
    info: Optional[DynamicLinkInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('info') }})
    link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('link') }})
    link_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('linkName') }})
    visibility: Optional[ManagedShortLinkVisibilityEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('visibility') }})
    

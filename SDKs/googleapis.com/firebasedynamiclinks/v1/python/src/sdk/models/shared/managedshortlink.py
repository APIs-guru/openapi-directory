from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import dynamiclinkinfo

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
    creation_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creationTime' }})
    flagged_attribute: Optional[List[ManagedShortLinkFlaggedAttributeEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'flaggedAttribute' }})
    info: Optional[dynamiclinkinfo.DynamicLinkInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'info' }})
    link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'link' }})
    link_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'linkName' }})
    visibility: Optional[ManagedShortLinkVisibilityEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'visibility' }})
    

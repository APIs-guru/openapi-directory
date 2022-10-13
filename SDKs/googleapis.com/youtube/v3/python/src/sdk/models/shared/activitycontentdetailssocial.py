from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import resourceid

class ActivityContentDetailsSocialTypeEnum(str, Enum):
    UNSPECIFIED = "unspecified"
    GOOGLE_PLUS = "googlePlus"
    FACEBOOK = "facebook"
    TWITTER = "twitter"


@dataclass_json
@dataclass
class ActivityContentDetailsSocial:
    author: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'author' }})
    image_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageUrl' }})
    reference_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'referenceUrl' }})
    resource_id: Optional[resourceid.ResourceID] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceId' }})
    type: Optional[ActivityContentDetailsSocialTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

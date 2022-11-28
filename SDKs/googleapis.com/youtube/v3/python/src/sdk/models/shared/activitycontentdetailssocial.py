from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class ActivityContentDetailsSocialTypeEnum(str, Enum):
    UNSPECIFIED = "unspecified"
    GOOGLE_PLUS = "googlePlus"
    FACEBOOK = "facebook"
    TWITTER = "twitter"


@dataclass_json
@dataclass
class ActivityContentDetailsSocial:
    r"""ActivityContentDetailsSocial
    Details about a social network post.
    """
    
    author: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('author') }})
    image_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageUrl') }})
    reference_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('referenceUrl') }})
    resource_id: Optional[ResourceID] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceId') }})
    type: Optional[ActivityContentDetailsSocialTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

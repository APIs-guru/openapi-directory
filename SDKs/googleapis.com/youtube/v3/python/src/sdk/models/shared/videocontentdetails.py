from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class VideoContentDetailsCaptionEnum(str, Enum):
    TRUE = "true"
    FALSE = "false"

class VideoContentDetailsDefinitionEnum(str, Enum):
    SD = "sd"
    HD = "hd"

class VideoContentDetailsProjectionEnum(str, Enum):
    RECTANGULAR = "rectangular"
    THREE_HUNDRED_AND_SIXTY = "360"


@dataclass_json
@dataclass
class VideoContentDetails:
    r"""VideoContentDetails
    Details about the content of a YouTube Video.
    """
    
    caption: Optional[VideoContentDetailsCaptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('caption') }})
    content_rating: Optional[ContentRating] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentRating') }})
    country_restriction: Optional[AccessPolicy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('countryRestriction') }})
    definition: Optional[VideoContentDetailsDefinitionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('definition') }})
    dimension: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimension') }})
    duration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('duration') }})
    has_custom_thumbnail: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hasCustomThumbnail') }})
    licensed_content: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('licensedContent') }})
    projection: Optional[VideoContentDetailsProjectionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('projection') }})
    region_restriction: Optional[VideoContentDetailsRegionRestriction] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regionRestriction') }})
    

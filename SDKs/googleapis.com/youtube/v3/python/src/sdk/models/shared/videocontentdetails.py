from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import contentrating
from . import accesspolicy
from . import videocontentdetailsregionrestriction

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
    caption: Optional[VideoContentDetailsCaptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'caption' }})
    content_rating: Optional[contentrating.ContentRating] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contentRating' }})
    country_restriction: Optional[accesspolicy.AccessPolicy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'countryRestriction' }})
    definition: Optional[VideoContentDetailsDefinitionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'definition' }})
    dimension: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dimension' }})
    duration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'duration' }})
    has_custom_thumbnail: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hasCustomThumbnail' }})
    licensed_content: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'licensedContent' }})
    projection: Optional[VideoContentDetailsProjectionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'projection' }})
    region_restriction: Optional[videocontentdetailsregionrestriction.VideoContentDetailsRegionRestriction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'regionRestriction' }})
    

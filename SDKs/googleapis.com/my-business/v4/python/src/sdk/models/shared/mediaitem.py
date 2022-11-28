from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class MediaItemMediaFormatEnum(str, Enum):
    MEDIA_FORMAT_UNSPECIFIED = "MEDIA_FORMAT_UNSPECIFIED"
    PHOTO = "PHOTO"
    VIDEO = "VIDEO"


@dataclass_json
@dataclass
class MediaItem:
    r"""MediaItem
    A single media item.
    """
    
    attribution: Optional[Attribution] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attribution') }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    data_ref: Optional[MediaItemDataRef] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataRef') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    dimensions: Optional[Dimensions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimensions') }})
    google_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('googleUrl') }})
    insights: Optional[MediaInsights] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('insights') }})
    location_association: Optional[LocationAssociation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locationAssociation') }})
    media_format: Optional[MediaItemMediaFormatEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mediaFormat') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    source_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceUrl') }})
    thumbnail_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thumbnailUrl') }})
    

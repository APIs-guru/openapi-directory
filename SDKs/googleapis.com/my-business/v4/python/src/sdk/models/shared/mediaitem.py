from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import attribution
from . import mediaitemdataref
from . import dimensions
from . import mediainsights
from . import locationassociation

class MediaItemMediaFormatEnum(str, Enum):
    MEDIA_FORMAT_UNSPECIFIED = "MEDIA_FORMAT_UNSPECIFIED"
    PHOTO = "PHOTO"
    VIDEO = "VIDEO"


@dataclass_json
@dataclass
class MediaItem:
    attribution: Optional[attribution.Attribution] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attribution' }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    data_ref: Optional[mediaitemdataref.MediaItemDataRef] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataRef' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    dimensions: Optional[dimensions.Dimensions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dimensions' }})
    google_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'googleUrl' }})
    insights: Optional[mediainsights.MediaInsights] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'insights' }})
    location_association: Optional[locationassociation.LocationAssociation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'locationAssociation' }})
    media_format: Optional[MediaItemMediaFormatEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mediaFormat' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    source_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceUrl' }})
    thumbnail_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'thumbnailUrl' }})
    

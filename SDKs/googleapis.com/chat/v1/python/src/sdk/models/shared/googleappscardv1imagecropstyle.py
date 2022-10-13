from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class GoogleAppsCardV1ImageCropStyleTypeEnum(str, Enum):
    IMAGE_CROP_TYPE_UNSPECIFIED = "IMAGE_CROP_TYPE_UNSPECIFIED"
    SQUARE = "SQUARE"
    CIRCLE = "CIRCLE"
    RECTANGLE_CUSTOM = "RECTANGLE_CUSTOM"
    RECTANGLE_4_3 = "RECTANGLE_4_3"


@dataclass_json
@dataclass
class GoogleAppsCardV1ImageCropStyle:
    aspect_ratio: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'aspectRatio' }})
    type: Optional[GoogleAppsCardV1ImageCropStyleTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

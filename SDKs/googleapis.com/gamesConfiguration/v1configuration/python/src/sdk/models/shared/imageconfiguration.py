from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class ImageConfigurationImageTypeEnum(str, Enum):
    IMAGE_TYPE_UNSPECIFIED = "IMAGE_TYPE_UNSPECIFIED"
    ACHIEVEMENT_ICON = "ACHIEVEMENT_ICON"
    LEADERBOARD_ICON = "LEADERBOARD_ICON"


@dataclass_json
@dataclass
class ImageConfiguration:
    image_type: Optional[ImageConfigurationImageTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageType' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    resource_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceId' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

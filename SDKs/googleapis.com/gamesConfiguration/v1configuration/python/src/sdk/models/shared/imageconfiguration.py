from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ImageConfigurationImageTypeEnum(str, Enum):
    IMAGE_TYPE_UNSPECIFIED = "IMAGE_TYPE_UNSPECIFIED"
    ACHIEVEMENT_ICON = "ACHIEVEMENT_ICON"
    LEADERBOARD_ICON = "LEADERBOARD_ICON"


@dataclass_json
@dataclass
class ImageConfiguration:
    r"""ImageConfiguration
    An image configuration resource.
    """
    
    image_type: Optional[ImageConfigurationImageTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageType') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    resource_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceId') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

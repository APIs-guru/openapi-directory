from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class CardHeaderImageStyleEnum(str, Enum):
    IMAGE_STYLE_UNSPECIFIED = "IMAGE_STYLE_UNSPECIFIED"
    IMAGE = "IMAGE"
    AVATAR = "AVATAR"


@dataclass_json
@dataclass
class CardHeader:
    image_style: Optional[CardHeaderImageStyleEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageStyle') }})
    image_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageUrl') }})
    subtitle: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subtitle') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    

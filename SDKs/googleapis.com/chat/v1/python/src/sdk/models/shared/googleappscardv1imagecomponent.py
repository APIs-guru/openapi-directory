from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleAppsCardV1ImageComponent:
    r"""GoogleAppsCardV1ImageComponent
    Represents an image.
    """
    
    alt_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('altText') }})
    border_style: Optional[GoogleAppsCardV1BorderStyle] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('borderStyle') }})
    crop_style: Optional[GoogleAppsCardV1ImageCropStyle] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cropStyle') }})
    image_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageUri') }})
    

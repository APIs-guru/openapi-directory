from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GoogleAppsCardV1CardHeaderImageTypeEnum(str, Enum):
    SQUARE = "SQUARE"
    CIRCLE = "CIRCLE"


@dataclass_json
@dataclass
class GoogleAppsCardV1CardHeader:
    r"""GoogleAppsCardV1CardHeader
    Represents a card header.
    """
    
    image_alt_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageAltText') }})
    image_type: Optional[GoogleAppsCardV1CardHeaderImageTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageType') }})
    image_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageUrl') }})
    subtitle: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subtitle') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    

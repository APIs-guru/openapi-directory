from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class GoogleAppsCardV1IconImageTypeEnum(str, Enum):
    SQUARE = "SQUARE"
    CIRCLE = "CIRCLE"


@dataclass_json
@dataclass
class GoogleAppsCardV1Icon:
    alt_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'altText' }})
    icon_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iconUrl' }})
    image_type: Optional[GoogleAppsCardV1IconImageTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageType' }})
    known_icon: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'knownIcon' }})
    

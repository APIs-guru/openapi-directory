from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class GoogleAppsCardV1CardHeaderImageTypeEnum(str, Enum):
    SQUARE = "SQUARE"
    CIRCLE = "CIRCLE"


@dataclass_json
@dataclass
class GoogleAppsCardV1CardHeader:
    image_alt_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageAltText' }})
    image_type: Optional[GoogleAppsCardV1CardHeaderImageTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageType' }})
    image_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageUrl' }})
    subtitle: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subtitle' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    

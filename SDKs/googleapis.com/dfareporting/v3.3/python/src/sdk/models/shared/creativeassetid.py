from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class CreativeAssetIDTypeEnum(str, Enum):
    IMAGE = "IMAGE"
    FLASH = "FLASH"
    VIDEO = "VIDEO"
    HTML = "HTML"
    HTML_IMAGE = "HTML_IMAGE"
    AUDIO = "AUDIO"


@dataclass_json
@dataclass
class CreativeAssetID:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    type: Optional[CreativeAssetIDTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

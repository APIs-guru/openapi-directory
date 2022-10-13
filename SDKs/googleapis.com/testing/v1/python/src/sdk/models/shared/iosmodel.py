from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class IosModelFormFactorEnum(str, Enum):
    DEVICE_FORM_FACTOR_UNSPECIFIED = "DEVICE_FORM_FACTOR_UNSPECIFIED"
    PHONE = "PHONE"
    TABLET = "TABLET"
    WEARABLE = "WEARABLE"


@dataclass_json
@dataclass
class IosModel:
    device_capabilities: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deviceCapabilities' }})
    form_factor: Optional[IosModelFormFactorEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'formFactor' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    screen_density: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'screenDensity' }})
    screen_x: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'screenX' }})
    screen_y: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'screenY' }})
    supported_version_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'supportedVersionIds' }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    

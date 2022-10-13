from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class AndroidModelFormEnum(str, Enum):
    DEVICE_FORM_UNSPECIFIED = "DEVICE_FORM_UNSPECIFIED"
    VIRTUAL = "VIRTUAL"
    PHYSICAL = "PHYSICAL"
    EMULATOR = "EMULATOR"

class AndroidModelFormFactorEnum(str, Enum):
    DEVICE_FORM_FACTOR_UNSPECIFIED = "DEVICE_FORM_FACTOR_UNSPECIFIED"
    PHONE = "PHONE"
    TABLET = "TABLET"
    WEARABLE = "WEARABLE"


@dataclass_json
@dataclass
class AndroidModel:
    brand: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'brand' }})
    codename: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'codename' }})
    form: Optional[AndroidModelFormEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'form' }})
    form_factor: Optional[AndroidModelFormFactorEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'formFactor' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    low_fps_video_recording: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lowFpsVideoRecording' }})
    manufacturer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'manufacturer' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    screen_density: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'screenDensity' }})
    screen_x: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'screenX' }})
    screen_y: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'screenY' }})
    supported_abis: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'supportedAbis' }})
    supported_version_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'supportedVersionIds' }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    thumbnail_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'thumbnailUrl' }})
    

from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

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
    r"""AndroidModel
    A description of an Android device tests may be run on.
    """
    
    brand: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('brand') }})
    codename: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('codename') }})
    form: Optional[AndroidModelFormEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('form') }})
    form_factor: Optional[AndroidModelFormFactorEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('formFactor') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    low_fps_video_recording: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lowFpsVideoRecording') }})
    manufacturer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('manufacturer') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    screen_density: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('screenDensity') }})
    screen_x: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('screenX') }})
    screen_y: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('screenY') }})
    supported_abis: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('supportedAbis') }})
    supported_version_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('supportedVersionIds') }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    thumbnail_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thumbnailUrl') }})
    

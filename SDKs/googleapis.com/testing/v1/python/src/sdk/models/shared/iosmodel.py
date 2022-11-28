from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class IosModelFormFactorEnum(str, Enum):
    DEVICE_FORM_FACTOR_UNSPECIFIED = "DEVICE_FORM_FACTOR_UNSPECIFIED"
    PHONE = "PHONE"
    TABLET = "TABLET"
    WEARABLE = "WEARABLE"


@dataclass_json
@dataclass
class IosModel:
    r"""IosModel
    A description of an iOS device tests may be run on.
    """
    
    device_capabilities: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceCapabilities') }})
    form_factor: Optional[IosModelFormFactorEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('formFactor') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    screen_density: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('screenDensity') }})
    screen_x: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('screenX') }})
    screen_y: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('screenY') }})
    supported_version_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('supportedVersionIds') }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    

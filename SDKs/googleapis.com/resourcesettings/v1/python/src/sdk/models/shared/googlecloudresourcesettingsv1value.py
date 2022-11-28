from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudResourcesettingsV1Value:
    r"""GoogleCloudResourcesettingsV1Value
    The data in a setting value.
    """
    
    boolean_value: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('booleanValue') }})
    duration_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('durationValue') }})
    enum_value: Optional[GoogleCloudResourcesettingsV1ValueEnumValue] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enumValue') }})
    string_map_value: Optional[GoogleCloudResourcesettingsV1ValueStringMap] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stringMapValue') }})
    string_set_value: Optional[GoogleCloudResourcesettingsV1ValueStringSet] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stringSetValue') }})
    string_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stringValue') }})
    

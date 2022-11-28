from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class InstancePlatformTypeEnum(str, Enum):
    PLATFORM_TYPE_UNSPECIFIED = "PLATFORM_TYPE_UNSPECIFIED"
    ANDROID = "ANDROID"
    IOS = "IOS"
    WEB_APP = "WEB_APP"


@dataclass_json
@dataclass
class Instance:
    r"""Instance
    The Instance resource.
    """
    
    acquisition_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('acquisitionUri') }})
    android_instance: Optional[InstanceAndroidDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('androidInstance') }})
    ios_instance: Optional[InstanceIosDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iosInstance') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    platform_type: Optional[InstancePlatformTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('platformType') }})
    realtime_play: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('realtimePlay') }})
    turn_based_play: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('turnBasedPlay') }})
    web_instance: Optional[InstanceWebDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webInstance') }})
    

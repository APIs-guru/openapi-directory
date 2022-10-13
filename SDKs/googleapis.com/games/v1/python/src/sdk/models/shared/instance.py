from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import instanceandroiddetails
from . import instanceiosdetails
from . import instancewebdetails

class InstancePlatformTypeEnum(str, Enum):
    PLATFORM_TYPE_UNSPECIFIED = "PLATFORM_TYPE_UNSPECIFIED"
    ANDROID = "ANDROID"
    IOS = "IOS"
    WEB_APP = "WEB_APP"


@dataclass_json
@dataclass
class Instance:
    acquisition_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'acquisitionUri' }})
    android_instance: Optional[instanceandroiddetails.InstanceAndroidDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'androidInstance' }})
    ios_instance: Optional[instanceiosdetails.InstanceIosDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iosInstance' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    platform_type: Optional[InstancePlatformTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'platformType' }})
    realtime_play: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'realtimePlay' }})
    turn_based_play: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'turnBasedPlay' }})
    web_instance: Optional[instancewebdetails.InstanceWebDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'webInstance' }})
    

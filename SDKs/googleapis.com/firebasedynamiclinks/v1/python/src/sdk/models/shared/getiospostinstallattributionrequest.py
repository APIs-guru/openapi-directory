from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import deviceinfo

class GetIosPostInstallAttributionRequestRetrievalMethodEnum(str, Enum):
    UNKNOWN_PAYLOAD_RETRIEVAL_METHOD = "UNKNOWN_PAYLOAD_RETRIEVAL_METHOD"
    IMPLICIT_WEAK_MATCH = "IMPLICIT_WEAK_MATCH"
    EXPLICIT_WEAK_MATCH = "EXPLICIT_WEAK_MATCH"
    EXPLICIT_STRONG_AFTER_WEAK_MATCH = "EXPLICIT_STRONG_AFTER_WEAK_MATCH"

class GetIosPostInstallAttributionRequestVisualStyleEnum(str, Enum):
    UNKNOWN_VISUAL_STYLE = "UNKNOWN_VISUAL_STYLE"
    DEFAULT_STYLE = "DEFAULT_STYLE"
    CUSTOM_STYLE = "CUSTOM_STYLE"


@dataclass_json
@dataclass
class GetIosPostInstallAttributionRequest:
    app_installation_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appInstallationTime' }})
    bundle_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bundleId' }})
    device: Optional[deviceinfo.DeviceInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'device' }})
    ios_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iosVersion' }})
    retrieval_method: Optional[GetIosPostInstallAttributionRequestRetrievalMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'retrievalMethod' }})
    sdk_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sdkVersion' }})
    unique_match_link_to_check: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uniqueMatchLinkToCheck' }})
    visual_style: Optional[GetIosPostInstallAttributionRequestVisualStyleEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'visualStyle' }})
    

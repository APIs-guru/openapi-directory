from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class SdkVersionSdkSupportStatusEnum(str, Enum):
    UNKNOWN = "UNKNOWN"
    SUPPORTED = "SUPPORTED"
    STALE = "STALE"
    DEPRECATED = "DEPRECATED"
    UNSUPPORTED = "UNSUPPORTED"


@dataclass_json
@dataclass
class SdkVersion:
    sdk_support_status: Optional[SdkVersionSdkSupportStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sdkSupportStatus' }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    version_display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'versionDisplayName' }})
    

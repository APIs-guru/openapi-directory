from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class SDKVersionSDKSupportStatusEnum(str, Enum):
    UNKNOWN = "UNKNOWN"
    SUPPORTED = "SUPPORTED"
    STALE = "STALE"
    DEPRECATED = "DEPRECATED"
    UNSUPPORTED = "UNSUPPORTED"


@dataclass_json
@dataclass
class SDKVersion:
    r"""SDKVersion
    The version of the SDK used to run the job.
    """
    
    sdk_support_status: Optional[SDKVersionSDKSupportStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sdkSupportStatus') }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    version_display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('versionDisplayName') }})
    

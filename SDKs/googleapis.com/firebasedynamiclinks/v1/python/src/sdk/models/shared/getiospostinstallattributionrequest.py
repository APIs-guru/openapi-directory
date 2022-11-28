from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

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
    r"""GetIosPostInstallAttributionRequest
    Request for iSDK to execute strong match flow for post-install attribution. This is meant for iOS requests only. Requests from other platforms will not be honored.
    """
    
    app_installation_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appInstallationTime') }})
    bundle_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bundleId') }})
    device: Optional[DeviceInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('device') }})
    ios_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iosVersion') }})
    retrieval_method: Optional[GetIosPostInstallAttributionRequestRetrievalMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('retrievalMethod') }})
    sdk_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sdkVersion') }})
    unique_match_link_to_check: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uniqueMatchLinkToCheck') }})
    visual_style: Optional[GetIosPostInstallAttributionRequestVisualStyleEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('visualStyle') }})
    

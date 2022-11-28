from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GoogleCloudRecaptchaenterpriseV1TokenPropertiesInvalidReasonEnum(str, Enum):
    INVALID_REASON_UNSPECIFIED = "INVALID_REASON_UNSPECIFIED"
    UNKNOWN_INVALID_REASON = "UNKNOWN_INVALID_REASON"
    MALFORMED = "MALFORMED"
    EXPIRED = "EXPIRED"
    DUPE = "DUPE"
    MISSING = "MISSING"
    BROWSER_ERROR = "BROWSER_ERROR"


@dataclass_json
@dataclass
class GoogleCloudRecaptchaenterpriseV1TokenProperties:
    action: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    android_package_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('androidPackageName') }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    hostname: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hostname') }})
    invalid_reason: Optional[GoogleCloudRecaptchaenterpriseV1TokenPropertiesInvalidReasonEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('invalidReason') }})
    ios_bundle_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iosBundleId') }})
    valid: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('valid') }})
    

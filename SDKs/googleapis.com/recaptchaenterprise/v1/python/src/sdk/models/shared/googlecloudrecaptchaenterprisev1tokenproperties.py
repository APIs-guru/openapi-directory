from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

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
    action: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    hostname: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hostname' }})
    invalid_reason: Optional[GoogleCloudRecaptchaenterpriseV1TokenPropertiesInvalidReasonEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'invalidReason' }})
    valid: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'valid' }})
    

from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import status

class QuotaErrorCodeEnum(str, Enum):
    UNSPECIFIED = "UNSPECIFIED"
    RESOURCE_EXHAUSTED = "RESOURCE_EXHAUSTED"
    OUT_OF_RANGE = "OUT_OF_RANGE"
    BILLING_NOT_ACTIVE = "BILLING_NOT_ACTIVE"
    PROJECT_DELETED = "PROJECT_DELETED"
    API_KEY_INVALID = "API_KEY_INVALID"
    API_KEY_EXPIRED = "API_KEY_EXPIRED"
    SPATULA_HEADER_INVALID = "SPATULA_HEADER_INVALID"
    LOAS_ROLE_INVALID = "LOAS_ROLE_INVALID"
    NO_LOAS_PROJECT = "NO_LOAS_PROJECT"
    PROJECT_STATUS_UNAVAILABLE = "PROJECT_STATUS_UNAVAILABLE"
    SERVICE_STATUS_UNAVAILABLE = "SERVICE_STATUS_UNAVAILABLE"
    BILLING_STATUS_UNAVAILABLE = "BILLING_STATUS_UNAVAILABLE"
    QUOTA_SYSTEM_UNAVAILABLE = "QUOTA_SYSTEM_UNAVAILABLE"


@dataclass_json
@dataclass
class QuotaError:
    code: Optional[QuotaErrorCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    status: Optional[status.Status] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    subject: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subject' }})
    

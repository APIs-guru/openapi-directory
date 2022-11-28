from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

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
    r"""QuotaError
    Represents error information for QuotaOperation.
    """
    
    code: Optional[QuotaErrorCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    status: Optional[Status] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    subject: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subject') }})
    

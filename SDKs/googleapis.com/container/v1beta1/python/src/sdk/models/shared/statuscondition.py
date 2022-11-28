from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class StatusConditionCanonicalCodeEnum(str, Enum):
    OK = "OK"
    CANCELLED = "CANCELLED"
    UNKNOWN = "UNKNOWN"
    INVALID_ARGUMENT = "INVALID_ARGUMENT"
    DEADLINE_EXCEEDED = "DEADLINE_EXCEEDED"
    NOT_FOUND = "NOT_FOUND"
    ALREADY_EXISTS = "ALREADY_EXISTS"
    PERMISSION_DENIED = "PERMISSION_DENIED"
    UNAUTHENTICATED = "UNAUTHENTICATED"
    RESOURCE_EXHAUSTED = "RESOURCE_EXHAUSTED"
    FAILED_PRECONDITION = "FAILED_PRECONDITION"
    ABORTED = "ABORTED"
    OUT_OF_RANGE = "OUT_OF_RANGE"
    UNIMPLEMENTED = "UNIMPLEMENTED"
    INTERNAL = "INTERNAL"
    UNAVAILABLE = "UNAVAILABLE"
    DATA_LOSS = "DATA_LOSS"

class StatusConditionCodeEnum(str, Enum):
    UNKNOWN = "UNKNOWN"
    GCE_STOCKOUT = "GCE_STOCKOUT"
    GKE_SERVICE_ACCOUNT_DELETED = "GKE_SERVICE_ACCOUNT_DELETED"
    GCE_QUOTA_EXCEEDED = "GCE_QUOTA_EXCEEDED"
    SET_BY_OPERATOR = "SET_BY_OPERATOR"
    CLOUD_KMS_KEY_ERROR = "CLOUD_KMS_KEY_ERROR"
    CA_EXPIRING = "CA_EXPIRING"


@dataclass_json
@dataclass
class StatusCondition:
    r"""StatusCondition
    StatusCondition describes why a cluster or a node pool has a certain status (e.g., ERROR or DEGRADED).
    """
    
    canonical_code: Optional[StatusConditionCanonicalCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canonicalCode') }})
    code: Optional[StatusConditionCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

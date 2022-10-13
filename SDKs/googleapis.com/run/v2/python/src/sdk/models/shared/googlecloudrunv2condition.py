from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class GoogleCloudRunV2ConditionExecutionReasonEnum(str, Enum):
    EXECUTION_REASON_UNDEFINED = "EXECUTION_REASON_UNDEFINED"
    JOB_STATUS_SERVICE_POLLING_ERROR = "JOB_STATUS_SERVICE_POLLING_ERROR"
    NON_ZERO_EXIT_CODE = "NON_ZERO_EXIT_CODE"
    CANCELLED = "CANCELLED"

class GoogleCloudRunV2ConditionReasonEnum(str, Enum):
    COMMON_REASON_UNDEFINED = "COMMON_REASON_UNDEFINED"
    UNKNOWN = "UNKNOWN"
    REVISION_FAILED = "REVISION_FAILED"
    PROGRESS_DEADLINE_EXCEEDED = "PROGRESS_DEADLINE_EXCEEDED"
    CONTAINER_MISSING = "CONTAINER_MISSING"
    CONTAINER_PERMISSION_DENIED = "CONTAINER_PERMISSION_DENIED"
    CONTAINER_IMAGE_UNAUTHORIZED = "CONTAINER_IMAGE_UNAUTHORIZED"
    CONTAINER_IMAGE_AUTHORIZATION_CHECK_FAILED = "CONTAINER_IMAGE_AUTHORIZATION_CHECK_FAILED"
    ENCRYPTION_KEY_PERMISSION_DENIED = "ENCRYPTION_KEY_PERMISSION_DENIED"
    ENCRYPTION_KEY_CHECK_FAILED = "ENCRYPTION_KEY_CHECK_FAILED"
    SECRETS_ACCESS_CHECK_FAILED = "SECRETS_ACCESS_CHECK_FAILED"
    WAITING_FOR_OPERATION = "WAITING_FOR_OPERATION"
    IMMEDIATE_RETRY = "IMMEDIATE_RETRY"
    POSTPONED_RETRY = "POSTPONED_RETRY"
    INTERNAL = "INTERNAL"

class GoogleCloudRunV2ConditionRevisionReasonEnum(str, Enum):
    REVISION_REASON_UNDEFINED = "REVISION_REASON_UNDEFINED"
    PENDING = "PENDING"
    RESERVE = "RESERVE"
    RETIRED = "RETIRED"
    RETIRING = "RETIRING"
    RECREATING = "RECREATING"
    HEALTH_CHECK_CONTAINER_ERROR = "HEALTH_CHECK_CONTAINER_ERROR"
    CUSTOMIZED_PATH_RESPONSE_PENDING = "CUSTOMIZED_PATH_RESPONSE_PENDING"
    MIN_INSTANCES_NOT_PROVISIONED = "MIN_INSTANCES_NOT_PROVISIONED"
    ACTIVE_REVISION_LIMIT_REACHED = "ACTIVE_REVISION_LIMIT_REACHED"
    NO_DEPLOYMENT = "NO_DEPLOYMENT"
    HEALTH_CHECK_SKIPPED = "HEALTH_CHECK_SKIPPED"

class GoogleCloudRunV2ConditionSeverityEnum(str, Enum):
    SEVERITY_UNSPECIFIED = "SEVERITY_UNSPECIFIED"
    ERROR = "ERROR"
    WARNING = "WARNING"
    INFO = "INFO"

class GoogleCloudRunV2ConditionStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    CONDITION_PENDING = "CONDITION_PENDING"
    CONDITION_RECONCILING = "CONDITION_RECONCILING"
    CONDITION_FAILED = "CONDITION_FAILED"
    CONDITION_SUCCEEDED = "CONDITION_SUCCEEDED"


@dataclass_json
@dataclass
class GoogleCloudRunV2Condition:
    execution_reason: Optional[GoogleCloudRunV2ConditionExecutionReasonEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'executionReason' }})
    last_transition_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastTransitionTime' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    reason: Optional[GoogleCloudRunV2ConditionReasonEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reason' }})
    revision_reason: Optional[GoogleCloudRunV2ConditionRevisionReasonEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'revisionReason' }})
    severity: Optional[GoogleCloudRunV2ConditionSeverityEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'severity' }})
    state: Optional[GoogleCloudRunV2ConditionStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

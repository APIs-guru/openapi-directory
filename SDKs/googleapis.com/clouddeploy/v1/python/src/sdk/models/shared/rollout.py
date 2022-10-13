from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import metadata
from . import phase

class RolloutApprovalStateEnum(str, Enum):
    APPROVAL_STATE_UNSPECIFIED = "APPROVAL_STATE_UNSPECIFIED"
    NEEDS_APPROVAL = "NEEDS_APPROVAL"
    DOES_NOT_NEED_APPROVAL = "DOES_NOT_NEED_APPROVAL"
    APPROVED = "APPROVED"
    REJECTED = "REJECTED"

class RolloutDeployFailureCauseEnum(str, Enum):
    FAILURE_CAUSE_UNSPECIFIED = "FAILURE_CAUSE_UNSPECIFIED"
    CLOUD_BUILD_UNAVAILABLE = "CLOUD_BUILD_UNAVAILABLE"
    EXECUTION_FAILED = "EXECUTION_FAILED"
    DEADLINE_EXCEEDED = "DEADLINE_EXCEEDED"
    RELEASE_FAILED = "RELEASE_FAILED"
    RELEASE_ABANDONED = "RELEASE_ABANDONED"
    VERIFICATION_CONFIG_NOT_FOUND = "VERIFICATION_CONFIG_NOT_FOUND"

class RolloutStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    SUCCEEDED = "SUCCEEDED"
    FAILED = "FAILED"
    IN_PROGRESS = "IN_PROGRESS"
    PENDING_APPROVAL = "PENDING_APPROVAL"
    APPROVAL_REJECTED = "APPROVAL_REJECTED"
    PENDING = "PENDING"
    PENDING_RELEASE = "PENDING_RELEASE"


@dataclass_json
@dataclass
class Rollout:
    annotations: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'annotations' }})
    approval_state: Optional[RolloutApprovalStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'approvalState' }})
    approve_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'approveTime' }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    deploy_end_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deployEndTime' }})
    deploy_failure_cause: Optional[RolloutDeployFailureCauseEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deployFailureCause' }})
    deploy_start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deployStartTime' }})
    deploying_build: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deployingBuild' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    enqueue_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enqueueTime' }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'etag' }})
    failure_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failureReason' }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    metadata: Optional[metadata.Metadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    phases: Optional[List[phase.Phase]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'phases' }})
    state: Optional[RolloutStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    target_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetId' }})
    uid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uid' }})
    

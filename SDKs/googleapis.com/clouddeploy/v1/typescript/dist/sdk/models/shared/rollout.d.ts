import { SpeakeasyBase } from "../../../internal/utils";
import { Metadata } from "./metadata";
import { Phase } from "./phase";
export declare enum RolloutApprovalStateEnum {
    ApprovalStateUnspecified = "APPROVAL_STATE_UNSPECIFIED",
    NeedsApproval = "NEEDS_APPROVAL",
    DoesNotNeedApproval = "DOES_NOT_NEED_APPROVAL",
    Approved = "APPROVED",
    Rejected = "REJECTED"
}
export declare enum RolloutDeployFailureCauseEnum {
    FailureCauseUnspecified = "FAILURE_CAUSE_UNSPECIFIED",
    CloudBuildUnavailable = "CLOUD_BUILD_UNAVAILABLE",
    ExecutionFailed = "EXECUTION_FAILED",
    DeadlineExceeded = "DEADLINE_EXCEEDED",
    ReleaseFailed = "RELEASE_FAILED",
    ReleaseAbandoned = "RELEASE_ABANDONED",
    VerificationConfigNotFound = "VERIFICATION_CONFIG_NOT_FOUND"
}
export declare enum RolloutStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Succeeded = "SUCCEEDED",
    Failed = "FAILED",
    InProgress = "IN_PROGRESS",
    PendingApproval = "PENDING_APPROVAL",
    ApprovalRejected = "APPROVAL_REJECTED",
    Pending = "PENDING",
    PendingRelease = "PENDING_RELEASE"
}
/**
 * A `Rollout` resource in the Google Cloud Deploy API. A `Rollout` contains information around a specific deployment to a `Target`.
**/
export declare class Rollout extends SpeakeasyBase {
    annotations?: Map<string, string>;
    approvalState?: RolloutApprovalStateEnum;
    approveTime?: string;
    createTime?: string;
    deployEndTime?: string;
    deployFailureCause?: RolloutDeployFailureCauseEnum;
    deployStartTime?: string;
    deployingBuild?: string;
    description?: string;
    enqueueTime?: string;
    etag?: string;
    failureReason?: string;
    labels?: Map<string, string>;
    metadata?: Metadata;
    name?: string;
    phases?: Phase[];
    state?: RolloutStateEnum;
    targetId?: string;
    uid?: string;
}
/**
 * A `Rollout` resource in the Google Cloud Deploy API. A `Rollout` contains information around a specific deployment to a `Target`.
**/
export declare class RolloutInput extends SpeakeasyBase {
    annotations?: Map<string, string>;
    description?: string;
    etag?: string;
    labels?: Map<string, string>;
    metadata?: Metadata;
    name?: string;
    targetId?: string;
}

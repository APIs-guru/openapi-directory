import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Metadata } from "./metadata";
import { Phase } from "./phase";


export enum RolloutApprovalStateEnum {
    ApprovalStateUnspecified = "APPROVAL_STATE_UNSPECIFIED",
    NeedsApproval = "NEEDS_APPROVAL",
    DoesNotNeedApproval = "DOES_NOT_NEED_APPROVAL",
    Approved = "APPROVED",
    Rejected = "REJECTED"
}

export enum RolloutDeployFailureCauseEnum {
    FailureCauseUnspecified = "FAILURE_CAUSE_UNSPECIFIED",
    CloudBuildUnavailable = "CLOUD_BUILD_UNAVAILABLE",
    ExecutionFailed = "EXECUTION_FAILED",
    DeadlineExceeded = "DEADLINE_EXCEEDED",
    ReleaseFailed = "RELEASE_FAILED",
    ReleaseAbandoned = "RELEASE_ABANDONED",
    VerificationConfigNotFound = "VERIFICATION_CONFIG_NOT_FOUND"
}

export enum RolloutStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Succeeded = "SUCCEEDED",
    Failed = "FAILED",
    InProgress = "IN_PROGRESS",
    PendingApproval = "PENDING_APPROVAL",
    ApprovalRejected = "APPROVAL_REJECTED",
    Pending = "PENDING",
    PendingRelease = "PENDING_RELEASE"
}


// Rollout
/** 
 * A `Rollout` resource in the Google Cloud Deploy API. A `Rollout` contains information around a specific deployment to a `Target`.
**/
export class Rollout extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=annotations" })
  annotations?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=approvalState" })
  approvalState?: RolloutApprovalStateEnum;

  @SpeakeasyMetadata({ data: "json, name=approveTime" })
  approveTime?: string;

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=deployEndTime" })
  deployEndTime?: string;

  @SpeakeasyMetadata({ data: "json, name=deployFailureCause" })
  deployFailureCause?: RolloutDeployFailureCauseEnum;

  @SpeakeasyMetadata({ data: "json, name=deployStartTime" })
  deployStartTime?: string;

  @SpeakeasyMetadata({ data: "json, name=deployingBuild" })
  deployingBuild?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=enqueueTime" })
  enqueueTime?: string;

  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=failureReason" })
  failureReason?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: Metadata;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=phases", elemType: Phase })
  phases?: Phase[];

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: RolloutStateEnum;

  @SpeakeasyMetadata({ data: "json, name=targetId" })
  targetId?: string;

  @SpeakeasyMetadata({ data: "json, name=uid" })
  uid?: string;
}


// RolloutInput
/** 
 * A `Rollout` resource in the Google Cloud Deploy API. A `Rollout` contains information around a specific deployment to a `Target`.
**/
export class RolloutInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=annotations" })
  annotations?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: Metadata;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=targetId" })
  targetId?: string;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Metadata } from "./metadata";
import { Phase } from "./phase";

export enum RolloutApprovalStateEnum {
    ApprovalStateUnspecified = "APPROVAL_STATE_UNSPECIFIED"
,    NeedsApproval = "NEEDS_APPROVAL"
,    DoesNotNeedApproval = "DOES_NOT_NEED_APPROVAL"
,    Approved = "APPROVED"
,    Rejected = "REJECTED"
}

export enum RolloutDeployFailureCauseEnum {
    FailureCauseUnspecified = "FAILURE_CAUSE_UNSPECIFIED"
,    CloudBuildUnavailable = "CLOUD_BUILD_UNAVAILABLE"
,    ExecutionFailed = "EXECUTION_FAILED"
,    DeadlineExceeded = "DEADLINE_EXCEEDED"
,    ReleaseFailed = "RELEASE_FAILED"
,    ReleaseAbandoned = "RELEASE_ABANDONED"
,    VerificationConfigNotFound = "VERIFICATION_CONFIG_NOT_FOUND"
}

export enum RolloutStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Succeeded = "SUCCEEDED"
,    Failed = "FAILED"
,    InProgress = "IN_PROGRESS"
,    PendingApproval = "PENDING_APPROVAL"
,    ApprovalRejected = "APPROVAL_REJECTED"
,    Pending = "PENDING"
,    PendingRelease = "PENDING_RELEASE"
}


// Rollout
/** 
 * A `Rollout` resource in the Google Cloud Deploy API. A `Rollout` contains information around a specific deployment to a `Target`.
**/
export class Rollout extends SpeakeasyBase {
  @Metadata({ data: "json, name=annotations" })
  annotations?: Map<string, string>;

  @Metadata({ data: "json, name=approvalState" })
  approvalState?: RolloutApprovalStateEnum;

  @Metadata({ data: "json, name=approveTime" })
  approveTime?: string;

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=deployEndTime" })
  deployEndTime?: string;

  @Metadata({ data: "json, name=deployFailureCause" })
  deployFailureCause?: RolloutDeployFailureCauseEnum;

  @Metadata({ data: "json, name=deployStartTime" })
  deployStartTime?: string;

  @Metadata({ data: "json, name=deployingBuild" })
  deployingBuild?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=enqueueTime" })
  enqueueTime?: string;

  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=failureReason" })
  failureReason?: string;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=metadata" })
  metadata?: Metadata;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=phases", elemType: shared.Phase })
  phases?: Phase[];

  @Metadata({ data: "json, name=state" })
  state?: RolloutStateEnum;

  @Metadata({ data: "json, name=targetId" })
  targetId?: string;

  @Metadata({ data: "json, name=uid" })
  uid?: string;
}

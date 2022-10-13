package shared

type RolloutApprovalStateEnum string

const (
	RolloutApprovalStateEnumApprovalStateUnspecified RolloutApprovalStateEnum = "APPROVAL_STATE_UNSPECIFIED"
	RolloutApprovalStateEnumNeedsApproval            RolloutApprovalStateEnum = "NEEDS_APPROVAL"
	RolloutApprovalStateEnumDoesNotNeedApproval      RolloutApprovalStateEnum = "DOES_NOT_NEED_APPROVAL"
	RolloutApprovalStateEnumApproved                 RolloutApprovalStateEnum = "APPROVED"
	RolloutApprovalStateEnumRejected                 RolloutApprovalStateEnum = "REJECTED"
)

type RolloutDeployFailureCauseEnum string

const (
	RolloutDeployFailureCauseEnumFailureCauseUnspecified    RolloutDeployFailureCauseEnum = "FAILURE_CAUSE_UNSPECIFIED"
	RolloutDeployFailureCauseEnumCloudBuildUnavailable      RolloutDeployFailureCauseEnum = "CLOUD_BUILD_UNAVAILABLE"
	RolloutDeployFailureCauseEnumExecutionFailed            RolloutDeployFailureCauseEnum = "EXECUTION_FAILED"
	RolloutDeployFailureCauseEnumDeadlineExceeded           RolloutDeployFailureCauseEnum = "DEADLINE_EXCEEDED"
	RolloutDeployFailureCauseEnumReleaseFailed              RolloutDeployFailureCauseEnum = "RELEASE_FAILED"
	RolloutDeployFailureCauseEnumReleaseAbandoned           RolloutDeployFailureCauseEnum = "RELEASE_ABANDONED"
	RolloutDeployFailureCauseEnumVerificationConfigNotFound RolloutDeployFailureCauseEnum = "VERIFICATION_CONFIG_NOT_FOUND"
)

type RolloutStateEnum string

const (
	RolloutStateEnumStateUnspecified RolloutStateEnum = "STATE_UNSPECIFIED"
	RolloutStateEnumSucceeded        RolloutStateEnum = "SUCCEEDED"
	RolloutStateEnumFailed           RolloutStateEnum = "FAILED"
	RolloutStateEnumInProgress       RolloutStateEnum = "IN_PROGRESS"
	RolloutStateEnumPendingApproval  RolloutStateEnum = "PENDING_APPROVAL"
	RolloutStateEnumApprovalRejected RolloutStateEnum = "APPROVAL_REJECTED"
	RolloutStateEnumPending          RolloutStateEnum = "PENDING"
	RolloutStateEnumPendingRelease   RolloutStateEnum = "PENDING_RELEASE"
)

type Rollout struct {
	Annotations        map[string]string              `json:"annotations"`
	ApprovalState      *RolloutApprovalStateEnum      `json:"approvalState"`
	ApproveTime        *string                        `json:"approveTime"`
	CreateTime         *string                        `json:"createTime"`
	DeployEndTime      *string                        `json:"deployEndTime"`
	DeployFailureCause *RolloutDeployFailureCauseEnum `json:"deployFailureCause"`
	DeployStartTime    *string                        `json:"deployStartTime"`
	DeployingBuild     *string                        `json:"deployingBuild"`
	Description        *string                        `json:"description"`
	EnqueueTime        *string                        `json:"enqueueTime"`
	Etag               *string                        `json:"etag"`
	FailureReason      *string                        `json:"failureReason"`
	Labels             map[string]string              `json:"labels"`
	Metadata           *Metadata                      `json:"metadata"`
	Name               *string                        `json:"name"`
	Phases             []Phase                        `json:"phases"`
	State              *RolloutStateEnum              `json:"state"`
	TargetID           *string                        `json:"targetId"`
	UID                *string                        `json:"uid"`
}

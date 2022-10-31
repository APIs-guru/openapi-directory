package shared




type RolloutApprovalStateEnum string

const (
    RolloutApprovalStateEnumApprovalStateUnspecified RolloutApprovalStateEnum = "APPROVAL_STATE_UNSPECIFIED"
RolloutApprovalStateEnumNeedsApproval RolloutApprovalStateEnum = "NEEDS_APPROVAL"
RolloutApprovalStateEnumDoesNotNeedApproval RolloutApprovalStateEnum = "DOES_NOT_NEED_APPROVAL"
RolloutApprovalStateEnumApproved RolloutApprovalStateEnum = "APPROVED"
RolloutApprovalStateEnumRejected RolloutApprovalStateEnum = "REJECTED"
)



type RolloutDeployFailureCauseEnum string

const (
    RolloutDeployFailureCauseEnumFailureCauseUnspecified RolloutDeployFailureCauseEnum = "FAILURE_CAUSE_UNSPECIFIED"
RolloutDeployFailureCauseEnumCloudBuildUnavailable RolloutDeployFailureCauseEnum = "CLOUD_BUILD_UNAVAILABLE"
RolloutDeployFailureCauseEnumExecutionFailed RolloutDeployFailureCauseEnum = "EXECUTION_FAILED"
RolloutDeployFailureCauseEnumDeadlineExceeded RolloutDeployFailureCauseEnum = "DEADLINE_EXCEEDED"
RolloutDeployFailureCauseEnumReleaseFailed RolloutDeployFailureCauseEnum = "RELEASE_FAILED"
RolloutDeployFailureCauseEnumReleaseAbandoned RolloutDeployFailureCauseEnum = "RELEASE_ABANDONED"
RolloutDeployFailureCauseEnumVerificationConfigNotFound RolloutDeployFailureCauseEnum = "VERIFICATION_CONFIG_NOT_FOUND"
)



type RolloutStateEnum string

const (
    RolloutStateEnumStateUnspecified RolloutStateEnum = "STATE_UNSPECIFIED"
RolloutStateEnumSucceeded RolloutStateEnum = "SUCCEEDED"
RolloutStateEnumFailed RolloutStateEnum = "FAILED"
RolloutStateEnumInProgress RolloutStateEnum = "IN_PROGRESS"
RolloutStateEnumPendingApproval RolloutStateEnum = "PENDING_APPROVAL"
RolloutStateEnumApprovalRejected RolloutStateEnum = "APPROVAL_REJECTED"
RolloutStateEnumPending RolloutStateEnum = "PENDING"
RolloutStateEnumPendingRelease RolloutStateEnum = "PENDING_RELEASE"
)


type Rollout struct {
    Annotations map[string]string `json:"annotations,omitempty"`
    ApprovalState *RolloutApprovalStateEnum `json:"approvalState,omitempty"`
    ApproveTime *string `json:"approveTime,omitempty"`
    CreateTime *string `json:"createTime,omitempty"`
    DeployEndTime *string `json:"deployEndTime,omitempty"`
    DeployFailureCause *RolloutDeployFailureCauseEnum `json:"deployFailureCause,omitempty"`
    DeployStartTime *string `json:"deployStartTime,omitempty"`
    DeployingBuild *string `json:"deployingBuild,omitempty"`
    Description *string `json:"description,omitempty"`
    EnqueueTime *string `json:"enqueueTime,omitempty"`
    Etag *string `json:"etag,omitempty"`
    FailureReason *string `json:"failureReason,omitempty"`
    Labels map[string]string `json:"labels,omitempty"`
    Metadata *Metadata `json:"metadata,omitempty"`
    Name *string `json:"name,omitempty"`
    Phases []Phase `json:"phases,omitempty"`
    State *RolloutStateEnum `json:"state,omitempty"`
    TargetID *string `json:"targetId,omitempty"`
    UID *string `json:"uid,omitempty"`
    
}


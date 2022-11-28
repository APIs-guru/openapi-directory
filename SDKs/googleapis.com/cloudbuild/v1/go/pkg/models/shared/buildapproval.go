package shared

type BuildApprovalStateEnum string

const (
	BuildApprovalStateEnumStateUnspecified BuildApprovalStateEnum = "STATE_UNSPECIFIED"
	BuildApprovalStateEnumPending          BuildApprovalStateEnum = "PENDING"
	BuildApprovalStateEnumApproved         BuildApprovalStateEnum = "APPROVED"
	BuildApprovalStateEnumRejected         BuildApprovalStateEnum = "REJECTED"
	BuildApprovalStateEnumCancelled        BuildApprovalStateEnum = "CANCELLED"
)

// BuildApproval
// BuildApproval describes a build's approval configuration, state, and result.
type BuildApproval struct {
	Config *ApprovalConfig         `json:"config,omitempty"`
	Result *ApprovalResult         `json:"result,omitempty"`
	State  *BuildApprovalStateEnum `json:"state,omitempty"`
}

// BuildApprovalInput
// BuildApproval describes a build's approval configuration, state, and result.
type BuildApprovalInput struct {
	Config *ApprovalConfig      `json:"config,omitempty"`
	Result *ApprovalResultInput `json:"result,omitempty"`
}

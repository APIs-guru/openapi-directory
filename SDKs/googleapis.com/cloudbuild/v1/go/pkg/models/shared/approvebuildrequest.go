package shared

// ApproveBuildRequestInput
// Request to approve or reject a pending build.
type ApproveBuildRequestInput struct {
	ApprovalResult *ApprovalResultInput `json:"approvalResult,omitempty"`
}

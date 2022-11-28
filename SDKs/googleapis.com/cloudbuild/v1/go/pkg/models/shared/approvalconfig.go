package shared

// ApprovalConfig
// ApprovalConfig describes configuration for manual approval of a build.
type ApprovalConfig struct {
	ApprovalRequired *bool `json:"approvalRequired,omitempty"`
}

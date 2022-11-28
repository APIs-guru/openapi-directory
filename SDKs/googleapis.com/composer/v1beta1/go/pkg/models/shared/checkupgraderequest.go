package shared

// CheckUpgradeRequest
// Request to check whether image upgrade will succeed.
type CheckUpgradeRequest struct {
	ImageVersion *string `json:"imageVersion,omitempty"`
}

package shared

// Verify
// Indicates that the location requires verification. Contains information about the current verification actions performed on the location.
type Verify struct {
	HasPendingVerification *bool `json:"hasPendingVerification,omitempty"`
}

package shared

// ConfidentialNodes
// ConfidentialNodes is configuration for the confidential nodes feature, which makes nodes run on confidential VMs.
type ConfidentialNodes struct {
	Enabled *bool `json:"enabled,omitempty"`
}

package shared

// Network
// Network describes the GCP network used to create workers in.
type Network struct {
	Network    *string `json:"network,omitempty"`
	ProjectID  *string `json:"projectId,omitempty"`
	Subnetwork *string `json:"subnetwork,omitempty"`
}

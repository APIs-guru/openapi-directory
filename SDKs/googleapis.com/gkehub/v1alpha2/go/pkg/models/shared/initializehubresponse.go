package shared

// InitializeHubResponse
// Response message for the InitializeHub method.
type InitializeHubResponse struct {
	ServiceIdentity      *string `json:"serviceIdentity,omitempty"`
	WorkloadIdentityPool *string `json:"workloadIdentityPool,omitempty"`
}

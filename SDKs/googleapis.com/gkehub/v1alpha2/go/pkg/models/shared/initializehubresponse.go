package shared

type InitializeHubResponse struct {
	ServiceIdentity      *string `json:"serviceIdentity"`
	WorkloadIdentityPool *string `json:"workloadIdentityPool"`
}

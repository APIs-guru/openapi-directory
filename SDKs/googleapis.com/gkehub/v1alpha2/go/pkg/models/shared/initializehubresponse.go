package shared



type InitializeHubResponse struct {
    ServiceIdentity *string `json:"serviceIdentity,omitempty"`
    WorkloadIdentityPool *string `json:"workloadIdentityPool,omitempty"`
    
}


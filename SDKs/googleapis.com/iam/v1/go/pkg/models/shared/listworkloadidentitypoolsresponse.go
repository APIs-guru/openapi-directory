package shared



type ListWorkloadIdentityPoolsResponse struct {
    NextPageToken *string `json:"nextPageToken,omitempty"`
    WorkloadIdentityPools []WorkloadIdentityPool `json:"workloadIdentityPools,omitempty"`
    
}


package shared

// ListWorkloadIdentityPoolsResponse
// Response message for ListWorkloadIdentityPools.
type ListWorkloadIdentityPoolsResponse struct {
	NextPageToken         *string                `json:"nextPageToken,omitempty"`
	WorkloadIdentityPools []WorkloadIdentityPool `json:"workloadIdentityPools,omitempty"`
}

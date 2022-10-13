package shared

type ListWorkloadIdentityPoolsResponse struct {
	NextPageToken         *string                `json:"nextPageToken"`
	WorkloadIdentityPools []WorkloadIdentityPool `json:"workloadIdentityPools"`
}

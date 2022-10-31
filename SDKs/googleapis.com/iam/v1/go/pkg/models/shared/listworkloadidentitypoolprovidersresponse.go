package shared

type ListWorkloadIdentityPoolProvidersResponse struct {
	NextPageToken                 *string                        `json:"nextPageToken,omitempty"`
	WorkloadIdentityPoolProviders []WorkloadIdentityPoolProvider `json:"workloadIdentityPoolProviders,omitempty"`
}

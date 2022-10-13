package shared

type ListWorkloadIdentityPoolProvidersResponse struct {
	NextPageToken                 *string                        `json:"nextPageToken"`
	WorkloadIdentityPoolProviders []WorkloadIdentityPoolProvider `json:"workloadIdentityPoolProviders"`
}

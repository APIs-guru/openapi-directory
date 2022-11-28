package shared

// ListWorkloadIdentityPoolProvidersResponse
// Response message for ListWorkloadIdentityPoolProviders.
type ListWorkloadIdentityPoolProvidersResponse struct {
	NextPageToken                 *string                        `json:"nextPageToken,omitempty"`
	WorkloadIdentityPoolProviders []WorkloadIdentityPoolProvider `json:"workloadIdentityPoolProviders,omitempty"`
}

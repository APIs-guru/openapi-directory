package shared

// ListPatchDeploymentsResponse
// A response message for listing patch deployments.
type ListPatchDeploymentsResponse struct {
	NextPageToken    *string           `json:"nextPageToken,omitempty"`
	PatchDeployments []PatchDeployment `json:"patchDeployments,omitempty"`
}

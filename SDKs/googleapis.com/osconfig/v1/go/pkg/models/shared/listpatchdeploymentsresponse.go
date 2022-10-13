package shared

type ListPatchDeploymentsResponse struct {
	NextPageToken    *string           `json:"nextPageToken"`
	PatchDeployments []PatchDeployment `json:"patchDeployments"`
}

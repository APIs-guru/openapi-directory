package shared



type ListPatchDeploymentsResponse struct {
    NextPageToken *string `json:"nextPageToken,omitempty"`
    PatchDeployments []PatchDeployment `json:"patchDeployments,omitempty"`
    
}


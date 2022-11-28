package shared

// GoogleCloudRetailV2GetDefaultBranchResponse
// Response message of CatalogService.GetDefaultBranch.
type GoogleCloudRetailV2GetDefaultBranchResponse struct {
	Branch  *string `json:"branch,omitempty"`
	Note    *string `json:"note,omitempty"`
	SetTime *string `json:"setTime,omitempty"`
}

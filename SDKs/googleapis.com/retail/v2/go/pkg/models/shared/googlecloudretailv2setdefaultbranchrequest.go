package shared

type GoogleCloudRetailV2SetDefaultBranchRequest struct {
	BranchID *string `json:"branchId"`
	Force    *bool   `json:"force"`
	Note     *string `json:"note"`
}

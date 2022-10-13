package shared

type GoogleCloudRetailV2betaSetDefaultBranchRequest struct {
	BranchID *string `json:"branchId"`
	Force    *bool   `json:"force"`
	Note     *string `json:"note"`
}

package shared

type GoogleCloudRetailV2betaSetDefaultBranchRequest struct {
	BranchID *string `json:"branchId,omitempty"`
	Force    *bool   `json:"force,omitempty"`
	Note     *string `json:"note,omitempty"`
}

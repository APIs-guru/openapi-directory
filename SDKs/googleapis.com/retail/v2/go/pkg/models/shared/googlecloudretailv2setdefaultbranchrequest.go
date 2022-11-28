package shared

// GoogleCloudRetailV2SetDefaultBranchRequest
// Request message to set a specified branch as new default_branch.
type GoogleCloudRetailV2SetDefaultBranchRequest struct {
	BranchID *string `json:"branchId,omitempty"`
	Force    *bool   `json:"force,omitempty"`
	Note     *string `json:"note,omitempty"`
}

package shared

// BranchModelResults
// Holds results from a paged query returning BranchModel values
type BranchModelResults struct {
	Count *int32        `json:"Count,omitempty"`
	Data  []BranchModel `json:"Data,omitempty"`
}

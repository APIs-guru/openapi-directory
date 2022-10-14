package shared

type BranchModelResults struct {
	Count *int32        `json:"Count,omitempty"`
	Data  []BranchModel `json:"Data,omitempty"`
}

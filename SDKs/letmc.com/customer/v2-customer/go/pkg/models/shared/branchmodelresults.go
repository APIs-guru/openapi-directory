package shared

type BranchModelResults struct {
	Count *int32        `json:"Count"`
	Data  []BranchModel `json:"Data"`
}

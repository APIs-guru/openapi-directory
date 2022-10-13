package shared

type Filter struct {
	Action   *FilterAction   `json:"action"`
	Criteria *FilterCriteria `json:"criteria"`
	ID       *string         `json:"id"`
}

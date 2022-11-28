package shared

// Filter
// Resource definition for Gmail filters. Filters apply to specific messages instead of an entire email thread.
type Filter struct {
	Action   *FilterAction   `json:"action,omitempty"`
	Criteria *FilterCriteria `json:"criteria,omitempty"`
	ID       *string         `json:"id,omitempty"`
}

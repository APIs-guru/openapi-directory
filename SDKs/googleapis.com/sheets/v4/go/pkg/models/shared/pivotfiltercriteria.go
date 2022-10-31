package shared

type PivotFilterCriteria struct {
	Condition        *BooleanCondition `json:"condition,omitempty"`
	VisibleByDefault *bool             `json:"visibleByDefault,omitempty"`
	VisibleValues    []string          `json:"visibleValues,omitempty"`
}

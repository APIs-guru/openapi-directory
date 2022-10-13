package shared

type PivotFilterCriteria struct {
	Condition        *BooleanCondition `json:"condition"`
	VisibleByDefault *bool             `json:"visibleByDefault"`
	VisibleValues    []string          `json:"visibleValues"`
}

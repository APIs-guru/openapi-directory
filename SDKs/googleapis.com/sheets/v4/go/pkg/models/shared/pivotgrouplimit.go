package shared

// PivotGroupLimit
// The count limit on rows or columns in the pivot group.
type PivotGroupLimit struct {
	ApplyOrder *int32 `json:"applyOrder,omitempty"`
	CountLimit *int32 `json:"countLimit,omitempty"`
}

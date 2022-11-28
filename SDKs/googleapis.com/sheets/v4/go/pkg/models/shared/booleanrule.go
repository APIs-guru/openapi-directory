package shared

// BooleanRule
// A rule that may or may not match, depending on the condition.
type BooleanRule struct {
	Condition *BooleanCondition `json:"condition,omitempty"`
	Format    *CellFormat       `json:"format,omitempty"`
}

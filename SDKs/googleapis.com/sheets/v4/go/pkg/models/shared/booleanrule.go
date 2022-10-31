package shared

type BooleanRule struct {
	Condition *BooleanCondition `json:"condition,omitempty"`
	Format    *CellFormat       `json:"format,omitempty"`
}

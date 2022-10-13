package shared

type BooleanRule struct {
	Condition *BooleanCondition `json:"condition"`
	Format    *CellFormat       `json:"format"`
}

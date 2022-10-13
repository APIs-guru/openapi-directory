package shared

type DataValidationRule struct {
	Condition    *BooleanCondition `json:"condition"`
	InputMessage *string           `json:"inputMessage"`
	ShowCustomUI *bool             `json:"showCustomUi"`
	Strict       *bool             `json:"strict"`
}

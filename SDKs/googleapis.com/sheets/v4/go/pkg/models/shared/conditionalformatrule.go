package shared

type ConditionalFormatRule struct {
	BooleanRule  *BooleanRule  `json:"booleanRule"`
	GradientRule *GradientRule `json:"gradientRule"`
	Ranges       []GridRange   `json:"ranges"`
}

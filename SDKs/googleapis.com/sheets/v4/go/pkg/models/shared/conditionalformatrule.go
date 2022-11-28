package shared

// ConditionalFormatRule
// A rule describing a conditional format.
type ConditionalFormatRule struct {
	BooleanRule  *BooleanRule  `json:"booleanRule,omitempty"`
	GradientRule *GradientRule `json:"gradientRule,omitempty"`
	Ranges       []GridRange   `json:"ranges,omitempty"`
}

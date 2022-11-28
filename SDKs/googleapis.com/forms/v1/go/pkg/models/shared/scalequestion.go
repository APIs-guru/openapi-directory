package shared

// ScaleQuestion
// A scale question. The user has a range of numeric values to choose from.
type ScaleQuestion struct {
	High      *int32  `json:"high,omitempty"`
	HighLabel *string `json:"highLabel,omitempty"`
	Low       *int32  `json:"low,omitempty"`
	LowLabel  *string `json:"lowLabel,omitempty"`
}

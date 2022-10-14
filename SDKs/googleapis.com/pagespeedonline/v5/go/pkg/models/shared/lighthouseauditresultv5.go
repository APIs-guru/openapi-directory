package shared

type LighthouseAuditResultV5 struct {
	Description      *string                `json:"description,omitempty"`
	Details          map[string]interface{} `json:"details,omitempty"`
	DisplayValue     *string                `json:"displayValue,omitempty"`
	ErrorMessage     *string                `json:"errorMessage,omitempty"`
	Explanation      *string                `json:"explanation,omitempty"`
	ID               *string                `json:"id,omitempty"`
	NumericUnit      *string                `json:"numericUnit,omitempty"`
	NumericValue     *float64               `json:"numericValue,omitempty"`
	Score            *interface{}           `json:"score,omitempty"`
	ScoreDisplayMode *string                `json:"scoreDisplayMode,omitempty"`
	Title            *string                `json:"title,omitempty"`
	Warnings         *interface{}           `json:"warnings,omitempty"`
}

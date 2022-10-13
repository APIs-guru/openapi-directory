package shared

type LighthouseAuditResultV5 struct {
	Description      *string                `json:"description"`
	Details          map[string]interface{} `json:"details"`
	DisplayValue     *string                `json:"displayValue"`
	ErrorMessage     *string                `json:"errorMessage"`
	Explanation      *string                `json:"explanation"`
	ID               *string                `json:"id"`
	NumericUnit      *string                `json:"numericUnit"`
	NumericValue     *float64               `json:"numericValue"`
	Score            *interface{}           `json:"score"`
	ScoreDisplayMode *string                `json:"scoreDisplayMode"`
	Title            *string                `json:"title"`
	Warnings         *interface{}           `json:"warnings"`
}

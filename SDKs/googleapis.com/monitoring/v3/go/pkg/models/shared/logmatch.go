package shared

type LogMatch struct {
	Filter          *string           `json:"filter"`
	LabelExtractors map[string]string `json:"labelExtractors"`
}

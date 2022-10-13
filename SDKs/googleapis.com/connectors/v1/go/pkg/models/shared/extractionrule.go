package shared

type ExtractionRule struct {
	ExtractionRegex *string `json:"extractionRegex"`
	Source          *Source `json:"source"`
}

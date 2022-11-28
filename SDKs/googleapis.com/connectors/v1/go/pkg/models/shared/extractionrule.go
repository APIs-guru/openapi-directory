package shared

// ExtractionRule
// Extraction Rule.
type ExtractionRule struct {
	ExtractionRegex *string `json:"extractionRegex,omitempty"`
	Source          *Source `json:"source,omitempty"`
}

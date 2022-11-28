package shared

// CropHintsAnnotation
// Set of crop hints that are used to generate new crops when serving images.
type CropHintsAnnotation struct {
	CropHints []CropHint `json:"cropHints,omitempty"`
}

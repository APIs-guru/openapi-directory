package shared

// CropHint
// Single crop hint that is used to generate a new crop when serving an image.
type CropHint struct {
	BoundingPoly       *BoundingPoly `json:"boundingPoly,omitempty"`
	Confidence         *float32      `json:"confidence,omitempty"`
	ImportanceFraction *float32      `json:"importanceFraction,omitempty"`
}

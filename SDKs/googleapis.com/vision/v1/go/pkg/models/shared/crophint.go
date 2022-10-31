package shared

type CropHint struct {
	BoundingPoly       *BoundingPoly `json:"boundingPoly,omitempty"`
	Confidence         *float32      `json:"confidence,omitempty"`
	ImportanceFraction *float32      `json:"importanceFraction,omitempty"`
}

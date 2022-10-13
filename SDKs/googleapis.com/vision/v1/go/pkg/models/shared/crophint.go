package shared

type CropHint struct {
	BoundingPoly       *BoundingPoly `json:"boundingPoly"`
	Confidence         *float32      `json:"confidence"`
	ImportanceFraction *float32      `json:"importanceFraction"`
}

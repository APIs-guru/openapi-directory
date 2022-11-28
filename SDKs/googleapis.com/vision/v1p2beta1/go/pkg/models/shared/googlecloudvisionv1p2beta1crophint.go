package shared

// GoogleCloudVisionV1p2beta1CropHint
// Single crop hint that is used to generate a new crop when serving an image.
type GoogleCloudVisionV1p2beta1CropHint struct {
	BoundingPoly       *GoogleCloudVisionV1p2beta1BoundingPoly `json:"boundingPoly,omitempty"`
	Confidence         *float32                                `json:"confidence,omitempty"`
	ImportanceFraction *float32                                `json:"importanceFraction,omitempty"`
}

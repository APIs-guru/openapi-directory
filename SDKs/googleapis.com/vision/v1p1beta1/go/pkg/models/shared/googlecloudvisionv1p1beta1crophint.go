package shared

type GoogleCloudVisionV1p1beta1CropHint struct {
	BoundingPoly       *GoogleCloudVisionV1p1beta1BoundingPoly `json:"boundingPoly,omitempty"`
	Confidence         *float32                                `json:"confidence,omitempty"`
	ImportanceFraction *float32                                `json:"importanceFraction,omitempty"`
}

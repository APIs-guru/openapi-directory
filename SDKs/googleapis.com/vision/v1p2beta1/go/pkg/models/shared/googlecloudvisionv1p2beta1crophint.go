package shared

type GoogleCloudVisionV1p2beta1CropHint struct {
	BoundingPoly       *GoogleCloudVisionV1p2beta1BoundingPoly `json:"boundingPoly"`
	Confidence         *float32                                `json:"confidence"`
	ImportanceFraction *float32                                `json:"importanceFraction"`
}

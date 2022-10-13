package shared

type GoogleCloudVisionV1p2beta1LocalizedObjectAnnotation struct {
	BoundingPoly *GoogleCloudVisionV1p2beta1BoundingPoly `json:"boundingPoly"`
	LanguageCode *string                                 `json:"languageCode"`
	Mid          *string                                 `json:"mid"`
	Name         *string                                 `json:"name"`
	Score        *float32                                `json:"score"`
}

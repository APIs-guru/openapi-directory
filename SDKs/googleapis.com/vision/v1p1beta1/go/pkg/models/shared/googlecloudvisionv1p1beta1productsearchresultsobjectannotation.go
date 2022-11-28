package shared

// GoogleCloudVisionV1p1beta1ProductSearchResultsObjectAnnotation
// Prediction for what the object in the bounding box is.
type GoogleCloudVisionV1p1beta1ProductSearchResultsObjectAnnotation struct {
	LanguageCode *string  `json:"languageCode,omitempty"`
	Mid          *string  `json:"mid,omitempty"`
	Name         *string  `json:"name,omitempty"`
	Score        *float32 `json:"score,omitempty"`
}

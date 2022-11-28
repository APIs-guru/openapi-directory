package shared

// GoogleCloudRecommendationengineV1beta1GcsSource
// Google Cloud Storage location for input content. format.
type GoogleCloudRecommendationengineV1beta1GcsSource struct {
	InputUris  []string `json:"inputUris,omitempty"`
	JSONSchema *string  `json:"jsonSchema,omitempty"`
}

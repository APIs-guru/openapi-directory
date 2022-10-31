package shared

type GoogleCloudDatalabelingV1beta1TextClassificationConfig struct {
	AllowMultiLabel   *bool                                          `json:"allowMultiLabel,omitempty"`
	AnnotationSpecSet *string                                        `json:"annotationSpecSet,omitempty"`
	SentimentConfig   *GoogleCloudDatalabelingV1beta1SentimentConfig `json:"sentimentConfig,omitempty"`
}

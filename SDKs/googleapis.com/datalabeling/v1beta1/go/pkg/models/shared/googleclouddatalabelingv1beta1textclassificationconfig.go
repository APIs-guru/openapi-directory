package shared

type GoogleCloudDatalabelingV1beta1TextClassificationConfig struct {
	AllowMultiLabel   *bool                                          `json:"allowMultiLabel"`
	AnnotationSpecSet *string                                        `json:"annotationSpecSet"`
	SentimentConfig   *GoogleCloudDatalabelingV1beta1SentimentConfig `json:"sentimentConfig"`
}

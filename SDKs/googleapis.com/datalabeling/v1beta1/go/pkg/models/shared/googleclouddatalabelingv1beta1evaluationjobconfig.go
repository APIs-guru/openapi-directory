package shared

type GoogleCloudDatalabelingV1beta1EvaluationJobConfig struct {
	BigqueryImportKeys        map[string]string                                        `json:"bigqueryImportKeys,omitempty"`
	BoundingPolyConfig        *GoogleCloudDatalabelingV1beta1BoundingPolyConfig        `json:"boundingPolyConfig,omitempty"`
	EvaluationConfig          *GoogleCloudDatalabelingV1beta1EvaluationConfig          `json:"evaluationConfig,omitempty"`
	EvaluationJobAlertConfig  *GoogleCloudDatalabelingV1beta1EvaluationJobAlertConfig  `json:"evaluationJobAlertConfig,omitempty"`
	ExampleCount              *int32                                                   `json:"exampleCount,omitempty"`
	ExampleSamplePercentage   *float64                                                 `json:"exampleSamplePercentage,omitempty"`
	HumanAnnotationConfig     *GoogleCloudDatalabelingV1beta1HumanAnnotationConfig     `json:"humanAnnotationConfig,omitempty"`
	ImageClassificationConfig *GoogleCloudDatalabelingV1beta1ImageClassificationConfig `json:"imageClassificationConfig,omitempty"`
	InputConfig               *GoogleCloudDatalabelingV1beta1InputConfig               `json:"inputConfig,omitempty"`
	TextClassificationConfig  *GoogleCloudDatalabelingV1beta1TextClassificationConfig  `json:"textClassificationConfig,omitempty"`
}

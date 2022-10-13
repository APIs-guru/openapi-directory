package shared

type GoogleCloudDatalabelingV1beta1EvaluationJobConfig struct {
	BigqueryImportKeys        map[string]string                                        `json:"bigqueryImportKeys"`
	BoundingPolyConfig        *GoogleCloudDatalabelingV1beta1BoundingPolyConfig        `json:"boundingPolyConfig"`
	EvaluationConfig          *GoogleCloudDatalabelingV1beta1EvaluationConfig          `json:"evaluationConfig"`
	EvaluationJobAlertConfig  *GoogleCloudDatalabelingV1beta1EvaluationJobAlertConfig  `json:"evaluationJobAlertConfig"`
	ExampleCount              *int32                                                   `json:"exampleCount"`
	ExampleSamplePercentage   *float64                                                 `json:"exampleSamplePercentage"`
	HumanAnnotationConfig     *GoogleCloudDatalabelingV1beta1HumanAnnotationConfig     `json:"humanAnnotationConfig"`
	ImageClassificationConfig *GoogleCloudDatalabelingV1beta1ImageClassificationConfig `json:"imageClassificationConfig"`
	InputConfig               *GoogleCloudDatalabelingV1beta1InputConfig               `json:"inputConfig"`
	TextClassificationConfig  *GoogleCloudDatalabelingV1beta1TextClassificationConfig  `json:"textClassificationConfig"`
}

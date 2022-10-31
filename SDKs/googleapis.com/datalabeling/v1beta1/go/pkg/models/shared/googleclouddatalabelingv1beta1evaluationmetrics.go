package shared

type GoogleCloudDatalabelingV1beta1EvaluationMetrics struct {
	ClassificationMetrics  *GoogleCloudDatalabelingV1beta1ClassificationMetrics  `json:"classificationMetrics,omitempty"`
	ObjectDetectionMetrics *GoogleCloudDatalabelingV1beta1ObjectDetectionMetrics `json:"objectDetectionMetrics,omitempty"`
}

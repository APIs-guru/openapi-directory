package shared

type GoogleCloudDatalabelingV1beta1EvaluationMetrics struct {
	ClassificationMetrics  *GoogleCloudDatalabelingV1beta1ClassificationMetrics  `json:"classificationMetrics"`
	ObjectDetectionMetrics *GoogleCloudDatalabelingV1beta1ObjectDetectionMetrics `json:"objectDetectionMetrics"`
}

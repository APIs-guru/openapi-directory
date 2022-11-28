package shared

// GoogleCloudDatalabelingV1beta1ClassificationMetrics
// Metrics calculated for a classification model.
type GoogleCloudDatalabelingV1beta1ClassificationMetrics struct {
	ConfusionMatrix *GoogleCloudDatalabelingV1beta1ConfusionMatrix `json:"confusionMatrix,omitempty"`
	PrCurve         *GoogleCloudDatalabelingV1beta1PrCurve         `json:"prCurve,omitempty"`
}

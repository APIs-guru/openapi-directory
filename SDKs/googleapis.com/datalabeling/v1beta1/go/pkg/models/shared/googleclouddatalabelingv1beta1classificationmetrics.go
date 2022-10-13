package shared

type GoogleCloudDatalabelingV1beta1ClassificationMetrics struct {
	ConfusionMatrix *GoogleCloudDatalabelingV1beta1ConfusionMatrix `json:"confusionMatrix"`
	PrCurve         *GoogleCloudDatalabelingV1beta1PrCurve         `json:"prCurve"`
}

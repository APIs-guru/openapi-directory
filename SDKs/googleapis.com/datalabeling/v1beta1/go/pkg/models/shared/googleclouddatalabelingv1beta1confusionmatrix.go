package shared

// GoogleCloudDatalabelingV1beta1ConfusionMatrix
// Confusion matrix of the model running the classification. Only applicable when the metrics entry aggregates multiple labels. Not applicable when the entry is for a single label.
type GoogleCloudDatalabelingV1beta1ConfusionMatrix struct {
	Row []GoogleCloudDatalabelingV1beta1Row `json:"row,omitempty"`
}

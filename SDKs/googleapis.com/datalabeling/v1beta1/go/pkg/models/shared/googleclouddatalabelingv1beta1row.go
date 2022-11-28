package shared

// GoogleCloudDatalabelingV1beta1Row
// A row in the confusion matrix. Each entry in this row has the same ground truth label.
type GoogleCloudDatalabelingV1beta1Row struct {
	AnnotationSpec *GoogleCloudDatalabelingV1beta1AnnotationSpec        `json:"annotationSpec,omitempty"`
	Entries        []GoogleCloudDatalabelingV1beta1ConfusionMatrixEntry `json:"entries,omitempty"`
}

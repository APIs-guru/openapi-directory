package shared

type GoogleCloudDatalabelingV1beta1ConfusionMatrixEntry struct {
	AnnotationSpec *GoogleCloudDatalabelingV1beta1AnnotationSpec `json:"annotationSpec"`
	ItemCount      *int32                                        `json:"itemCount"`
}

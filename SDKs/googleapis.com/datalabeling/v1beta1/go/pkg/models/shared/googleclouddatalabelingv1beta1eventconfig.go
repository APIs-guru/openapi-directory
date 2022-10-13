package shared

type GoogleCloudDatalabelingV1beta1EventConfig struct {
	AnnotationSpecSets []string `json:"annotationSpecSets"`
	ClipLength         *int32   `json:"clipLength"`
	OverlapLength      *int32   `json:"overlapLength"`
}

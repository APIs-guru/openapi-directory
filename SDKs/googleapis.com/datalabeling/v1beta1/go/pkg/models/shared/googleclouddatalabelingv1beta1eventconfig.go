package shared

type GoogleCloudDatalabelingV1beta1EventConfig struct {
	AnnotationSpecSets []string `json:"annotationSpecSets,omitempty"`
	ClipLength         *int32   `json:"clipLength,omitempty"`
	OverlapLength      *int32   `json:"overlapLength,omitempty"`
}

package shared

type GoogleCloudDatalabelingV1beta1ObjectTrackingConfig struct {
	AnnotationSpecSet *string `json:"annotationSpecSet,omitempty"`
	ClipLength        *int32  `json:"clipLength,omitempty"`
	OverlapLength     *int32  `json:"overlapLength,omitempty"`
}

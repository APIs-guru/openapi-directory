package shared

type GoogleCloudDatalabelingV1beta1ObjectTrackingConfig struct {
	AnnotationSpecSet *string `json:"annotationSpecSet"`
	ClipLength        *int32  `json:"clipLength"`
	OverlapLength     *int32  `json:"overlapLength"`
}

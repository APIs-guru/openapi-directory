package shared

type GoogleCloudDatalabelingV1beta1VideoClassificationConfig struct {
	AnnotationSpecSetConfigs []GoogleCloudDatalabelingV1beta1AnnotationSpecSetConfig `json:"annotationSpecSetConfigs,omitempty"`
	ApplyShotDetection       *bool                                                   `json:"applyShotDetection,omitempty"`
}

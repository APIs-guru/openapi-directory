package shared

// GoogleCloudDatalabelingV1beta1AnnotationSpecSetConfig
// Annotation spec set with the setting of allowing multi labels or not.
type GoogleCloudDatalabelingV1beta1AnnotationSpecSetConfig struct {
	AllowMultiLabel   *bool   `json:"allowMultiLabel,omitempty"`
	AnnotationSpecSet *string `json:"annotationSpecSet,omitempty"`
}

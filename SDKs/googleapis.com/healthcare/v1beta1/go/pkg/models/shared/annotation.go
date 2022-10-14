package shared

type Annotation struct {
	AnnotationSource   *AnnotationSource        `json:"annotationSource,omitempty"`
	CustomData         map[string]string        `json:"customData,omitempty"`
	ImageAnnotation    *ImageAnnotation         `json:"imageAnnotation,omitempty"`
	Name               *string                  `json:"name,omitempty"`
	ResourceAnnotation *ResourceAnnotation      `json:"resourceAnnotation,omitempty"`
	TextAnnotation     *SensitiveTextAnnotation `json:"textAnnotation,omitempty"`
}

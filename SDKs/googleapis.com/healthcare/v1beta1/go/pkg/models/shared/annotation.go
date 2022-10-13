package shared

type Annotation struct {
	AnnotationSource   *AnnotationSource        `json:"annotationSource"`
	CustomData         map[string]string        `json:"customData"`
	ImageAnnotation    *ImageAnnotation         `json:"imageAnnotation"`
	Name               *string                  `json:"name"`
	ResourceAnnotation *ResourceAnnotation      `json:"resourceAnnotation"`
	TextAnnotation     *SensitiveTextAnnotation `json:"textAnnotation"`
}

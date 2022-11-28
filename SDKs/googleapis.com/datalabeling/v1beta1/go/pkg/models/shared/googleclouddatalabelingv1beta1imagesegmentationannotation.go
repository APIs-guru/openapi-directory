package shared

// GoogleCloudDatalabelingV1beta1ImageSegmentationAnnotation
// Image segmentation annotation.
type GoogleCloudDatalabelingV1beta1ImageSegmentationAnnotation struct {
	AnnotationColors map[string]GoogleCloudDatalabelingV1beta1AnnotationSpec `json:"annotationColors,omitempty"`
	ImageBytes       *string                                                 `json:"imageBytes,omitempty"`
	MimeType         *string                                                 `json:"mimeType,omitempty"`
}

package shared

type GoogleCloudDatalabelingV1beta1ImageSegmentationAnnotation struct {
	AnnotationColors map[string]GoogleCloudDatalabelingV1beta1AnnotationSpec `json:"annotationColors"`
	ImageBytes       *string                                                 `json:"imageBytes"`
	MimeType         *string                                                 `json:"mimeType"`
}

package shared

// GoogleCloudVisionV1p2beta1ImageAnnotationContext
// If an image was produced from a file (e.g. a PDF), this message gives information about the source of that image.
type GoogleCloudVisionV1p2beta1ImageAnnotationContext struct {
	PageNumber *int32  `json:"pageNumber,omitempty"`
	URI        *string `json:"uri,omitempty"`
}

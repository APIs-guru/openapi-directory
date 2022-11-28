package shared

// ImageAnnotationContext
// If an image was produced from a file (e.g. a PDF), this message gives information about the source of that image.
type ImageAnnotationContext struct {
	PageNumber *int32  `json:"pageNumber,omitempty"`
	URI        *string `json:"uri,omitempty"`
}

package shared

// GoogleCloudDocumentaiV1beta3DocumentPageMatrix
// Representation for transformation matrix, intended to be compatible and used with OpenCV format for image manipulation.
type GoogleCloudDocumentaiV1beta3DocumentPageMatrix struct {
	Cols *int32  `json:"cols,omitempty"`
	Data *string `json:"data,omitempty"`
	Rows *int32  `json:"rows,omitempty"`
	Type *int32  `json:"type,omitempty"`
}

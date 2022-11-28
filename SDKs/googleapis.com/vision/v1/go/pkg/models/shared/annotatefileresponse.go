package shared

// AnnotateFileResponse
// Response to a single file annotation request. A file may contain one or more images, which individually have their own responses.
type AnnotateFileResponse struct {
	Error       *Status                 `json:"error,omitempty"`
	InputConfig *InputConfig            `json:"inputConfig,omitempty"`
	Responses   []AnnotateImageResponse `json:"responses,omitempty"`
	TotalPages  *int32                  `json:"totalPages,omitempty"`
}

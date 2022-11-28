package shared

// BatchAnnotateFilesResponse
// A list of file annotation responses.
type BatchAnnotateFilesResponse struct {
	Responses []AnnotateFileResponse `json:"responses,omitempty"`
}

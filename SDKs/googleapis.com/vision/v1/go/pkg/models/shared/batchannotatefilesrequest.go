package shared

// BatchAnnotateFilesRequest
// A list of requests to annotate files using the BatchAnnotateFiles API.
type BatchAnnotateFilesRequest struct {
	Parent   *string               `json:"parent,omitempty"`
	Requests []AnnotateFileRequest `json:"requests,omitempty"`
}

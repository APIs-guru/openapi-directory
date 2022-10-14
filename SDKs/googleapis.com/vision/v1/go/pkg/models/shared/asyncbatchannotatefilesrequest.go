package shared

type AsyncBatchAnnotateFilesRequest struct {
	Parent   *string                    `json:"parent,omitempty"`
	Requests []AsyncAnnotateFileRequest `json:"requests,omitempty"`
}

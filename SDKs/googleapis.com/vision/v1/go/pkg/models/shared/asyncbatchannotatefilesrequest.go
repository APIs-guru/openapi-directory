package shared

type AsyncBatchAnnotateFilesRequest struct {
	Parent   *string                    `json:"parent"`
	Requests []AsyncAnnotateFileRequest `json:"requests"`
}

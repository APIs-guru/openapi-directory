package shared

type BatchAnnotateFilesRequest struct {
	Parent   *string               `json:"parent"`
	Requests []AnnotateFileRequest `json:"requests"`
}

package shared

type BatchAnnotateFilesResponse struct {
	Responses []AnnotateFileResponse `json:"responses"`
}

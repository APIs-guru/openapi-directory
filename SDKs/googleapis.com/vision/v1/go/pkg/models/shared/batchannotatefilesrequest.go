package shared



type BatchAnnotateFilesRequest struct {
    Parent *string `json:"parent,omitempty"`
    Requests []AnnotateFileRequest `json:"requests,omitempty"`
    
}


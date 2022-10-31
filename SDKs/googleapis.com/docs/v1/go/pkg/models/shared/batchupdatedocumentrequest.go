package shared



type BatchUpdateDocumentRequest struct {
    Requests []Request `json:"requests,omitempty"`
    WriteControl *WriteControl `json:"writeControl,omitempty"`
    
}


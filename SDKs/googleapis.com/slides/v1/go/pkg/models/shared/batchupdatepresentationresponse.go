package shared



type BatchUpdatePresentationResponse struct {
    PresentationID *string `json:"presentationId,omitempty"`
    Replies []Response `json:"replies,omitempty"`
    WriteControl *WriteControl `json:"writeControl,omitempty"`
    
}


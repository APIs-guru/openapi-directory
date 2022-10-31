package shared



type MessagePart struct {
    Body *MessagePartBody `json:"body,omitempty"`
    Filename *string `json:"filename,omitempty"`
    Headers []MessagePartHeader `json:"headers,omitempty"`
    MimeType *string `json:"mimeType,omitempty"`
    PartID *string `json:"partId,omitempty"`
    Parts []MessagePart `json:"parts,omitempty"`
    
}


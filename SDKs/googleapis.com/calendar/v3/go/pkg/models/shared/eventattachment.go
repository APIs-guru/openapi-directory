package shared



type EventAttachment struct {
    FileID *string `json:"fileId,omitempty"`
    FileURL *string `json:"fileUrl,omitempty"`
    IconLink *string `json:"iconLink,omitempty"`
    MimeType *string `json:"mimeType,omitempty"`
    Title *string `json:"title,omitempty"`
    
}


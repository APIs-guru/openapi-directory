package shared



type Attachment struct {
    CreateTime *string `json:"createTime,omitempty"`
    Creator *Actor `json:"creator,omitempty"`
    Filename *string `json:"filename,omitempty"`
    MimeType *string `json:"mimeType,omitempty"`
    Name *string `json:"name,omitempty"`
    SizeBytes *string `json:"sizeBytes,omitempty"`
    
}


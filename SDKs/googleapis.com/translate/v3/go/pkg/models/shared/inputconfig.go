package shared



type InputConfig struct {
    GcsSource *GcsSource `json:"gcsSource,omitempty"`
    MimeType *string `json:"mimeType,omitempty"`
    
}


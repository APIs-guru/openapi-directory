package shared



type DocumentTranslation struct {
    ByteStreamOutputs []string `json:"byteStreamOutputs,omitempty"`
    DetectedLanguageCode *string `json:"detectedLanguageCode,omitempty"`
    MimeType *string `json:"mimeType,omitempty"`
    
}


package shared

// DocumentTranslation
// A translated document message.
type DocumentTranslation struct {
	ByteStreamOutputs    []string `json:"byteStreamOutputs,omitempty"`
	DetectedLanguageCode *string  `json:"detectedLanguageCode,omitempty"`
	MimeType             *string  `json:"mimeType,omitempty"`
}

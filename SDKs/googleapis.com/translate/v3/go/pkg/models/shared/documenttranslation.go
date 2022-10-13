package shared

type DocumentTranslation struct {
	ByteStreamOutputs    []string `json:"byteStreamOutputs"`
	DetectedLanguageCode *string  `json:"detectedLanguageCode"`
	MimeType             *string  `json:"mimeType"`
}

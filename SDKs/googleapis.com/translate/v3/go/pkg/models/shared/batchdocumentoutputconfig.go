package shared

// BatchDocumentOutputConfig
// Output configuration for BatchTranslateDocument request.
type BatchDocumentOutputConfig struct {
	GcsDestination *GcsDestination `json:"gcsDestination,omitempty"`
}

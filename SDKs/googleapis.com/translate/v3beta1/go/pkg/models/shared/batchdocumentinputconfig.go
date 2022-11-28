package shared

// BatchDocumentInputConfig
// Input configuration for BatchTranslateDocument request.
type BatchDocumentInputConfig struct {
	GcsSource *GcsSource `json:"gcsSource,omitempty"`
}

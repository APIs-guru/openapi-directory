package shared

// TranscriptOutputConfig
// Specifies an optional destination for the recognition results.
type TranscriptOutputConfig struct {
	GcsURI *string `json:"gcsUri,omitempty"`
}

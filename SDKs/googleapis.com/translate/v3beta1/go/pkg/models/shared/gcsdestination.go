package shared

// GcsDestination
// The Google Cloud Storage location for the output content.
type GcsDestination struct {
	OutputURIPrefix *string `json:"outputUriPrefix,omitempty"`
}

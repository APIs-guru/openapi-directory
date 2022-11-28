package shared

// GcsDestination
// The Google Cloud Storage location where the output will be written to.
type GcsDestination struct {
	URI *string `json:"uri,omitempty"`
}

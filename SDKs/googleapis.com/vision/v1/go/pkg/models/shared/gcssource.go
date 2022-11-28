package shared

// GcsSource
// The Google Cloud Storage location where the input will be read from.
type GcsSource struct {
	URI *string `json:"uri,omitempty"`
}

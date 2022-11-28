package shared

// GcsSource
// Specifies the configuration for importing data from Cloud Storage.
type GcsSource struct {
	URI *string `json:"uri,omitempty"`
}

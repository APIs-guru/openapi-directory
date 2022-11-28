package shared

// GcsDestination
// A Cloud Storage location.
type GcsDestination struct {
	URI       *string `json:"uri,omitempty"`
	URIPrefix *string `json:"uriPrefix,omitempty"`
}

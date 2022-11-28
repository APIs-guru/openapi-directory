package shared

// Fingerprint
// A set of properties that uniquely identify a given Docker image.
type Fingerprint struct {
	V1Name *string  `json:"v1Name,omitempty"`
	V2Blob []string `json:"v2Blob,omitempty"`
	V2Name *string  `json:"v2Name,omitempty"`
}

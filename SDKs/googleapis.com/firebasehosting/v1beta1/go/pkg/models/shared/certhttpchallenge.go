package shared

// CertHTTPChallenge
// Represents an HTTP certificate challenge.
type CertHTTPChallenge struct {
	Path  *string `json:"path,omitempty"`
	Token *string `json:"token,omitempty"`
}

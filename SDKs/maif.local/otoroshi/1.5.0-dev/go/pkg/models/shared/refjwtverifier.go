package shared

// RefJwtVerifier
// Reference to a global JWT verifier
type RefJwtVerifier struct {
	Enabled bool   `json:"enabled"`
	ID      string `json:"id"`
	Type    string `json:"type"`
}

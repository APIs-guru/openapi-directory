package shared

// DecodeIntegrityTokenRequest
// Request to decode the integrity token.
type DecodeIntegrityTokenRequest struct {
	IntegrityToken *string `json:"integrityToken,omitempty"`
}

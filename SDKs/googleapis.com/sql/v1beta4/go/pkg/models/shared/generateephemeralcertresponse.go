package shared

// GenerateEphemeralCertResponse
// Ephemeral certificate creation request.
type GenerateEphemeralCertResponse struct {
	EphemeralCert *SslCert `json:"ephemeralCert,omitempty"`
}

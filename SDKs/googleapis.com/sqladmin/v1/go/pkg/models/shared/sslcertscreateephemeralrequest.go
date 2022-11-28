package shared

// SslCertsCreateEphemeralRequest
// SslCerts create ephemeral certificate request.
type SslCertsCreateEphemeralRequest struct {
	AccessToken *string `json:"access_token,omitempty"`
	PublicKey   *string `json:"public_key,omitempty"`
}

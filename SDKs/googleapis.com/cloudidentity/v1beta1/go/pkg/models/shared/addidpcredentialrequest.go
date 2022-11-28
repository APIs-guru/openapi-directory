package shared

// AddIdpCredentialRequest
// The request for creating an IdpCredential with its associated payload. An InboundSamlSsoProfile can own up to 2 credentials.
type AddIdpCredentialRequest struct {
	PemData *string `json:"pemData,omitempty"`
}

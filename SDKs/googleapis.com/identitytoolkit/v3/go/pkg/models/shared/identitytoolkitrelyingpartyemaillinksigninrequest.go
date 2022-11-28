package shared

// IdentitytoolkitRelyingpartyEmailLinkSigninRequest
// Request to sign in with email.
type IdentitytoolkitRelyingpartyEmailLinkSigninRequest struct {
	Email   *string `json:"email,omitempty"`
	IDToken *string `json:"idToken,omitempty"`
	OobCode *string `json:"oobCode,omitempty"`
}

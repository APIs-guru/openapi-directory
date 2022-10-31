package shared

type Tokeninfo struct {
	Audience      *string `json:"audience,omitempty"`
	Email         *string `json:"email,omitempty"`
	EmailVerified *bool   `json:"email_verified,omitempty"`
	ExpiresIn     *int32  `json:"expires_in,omitempty"`
	IssuedAt      *int32  `json:"issued_at,omitempty"`
	IssuedTo      *string `json:"issued_to,omitempty"`
	Issuer        *string `json:"issuer,omitempty"`
	Nonce         *string `json:"nonce,omitempty"`
	Scope         *string `json:"scope,omitempty"`
	UserID        *string `json:"user_id,omitempty"`
	VerifiedEmail *bool   `json:"verified_email,omitempty"`
}

package shared

type Tokeninfo struct {
	Audience      *string `json:"audience"`
	Email         *string `json:"email"`
	EmailVerified *bool   `json:"email_verified"`
	ExpiresIn     *int32  `json:"expires_in"`
	IssuedAt      *int32  `json:"issued_at"`
	IssuedTo      *string `json:"issued_to"`
	Issuer        *string `json:"issuer"`
	Nonce         *string `json:"nonce"`
	Scope         *string `json:"scope"`
	UserID        *string `json:"user_id"`
	VerifiedEmail *bool   `json:"verified_email"`
}

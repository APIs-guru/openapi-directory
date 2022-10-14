package shared

type Tokeninfo struct {
	Audience      *string `json:"audience,omitempty"`
	Email         *string `json:"email,omitempty"`
	ExpiresIn     *int32  `json:"expires_in,omitempty"`
	IssuedTo      *string `json:"issued_to,omitempty"`
	Scope         *string `json:"scope,omitempty"`
	UserID        *string `json:"user_id,omitempty"`
	VerifiedEmail *bool   `json:"verified_email,omitempty"`
}

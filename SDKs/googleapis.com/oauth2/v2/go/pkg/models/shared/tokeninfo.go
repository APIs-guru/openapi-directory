package shared

type Tokeninfo struct {
	Audience      *string `json:"audience"`
	Email         *string `json:"email"`
	ExpiresIn     *int32  `json:"expires_in"`
	IssuedTo      *string `json:"issued_to"`
	Scope         *string `json:"scope"`
	UserID        *string `json:"user_id"`
	VerifiedEmail *bool   `json:"verified_email"`
}

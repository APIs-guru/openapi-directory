package shared

// EmailLinkSigninResponse
// Response of email signIn.
type EmailLinkSigninResponse struct {
	Email        *string `json:"email,omitempty"`
	ExpiresIn    *string `json:"expiresIn,omitempty"`
	IDToken      *string `json:"idToken,omitempty"`
	IsNewUser    *bool   `json:"isNewUser,omitempty"`
	Kind         *string `json:"kind,omitempty"`
	LocalID      *string `json:"localId,omitempty"`
	RefreshToken *string `json:"refreshToken,omitempty"`
}

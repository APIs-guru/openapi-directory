package shared

type EmailLinkSigninResponse struct {
	Email        *string `json:"email"`
	ExpiresIn    *string `json:"expiresIn"`
	IDToken      *string `json:"idToken"`
	IsNewUser    *bool   `json:"isNewUser"`
	Kind         *string `json:"kind"`
	LocalID      *string `json:"localId"`
	RefreshToken *string `json:"refreshToken"`
}

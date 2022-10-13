package shared

type VerifyCustomTokenResponse struct {
	ExpiresIn    *string `json:"expiresIn"`
	IDToken      *string `json:"idToken"`
	IsNewUser    *bool   `json:"isNewUser"`
	Kind         *string `json:"kind"`
	RefreshToken *string `json:"refreshToken"`
}

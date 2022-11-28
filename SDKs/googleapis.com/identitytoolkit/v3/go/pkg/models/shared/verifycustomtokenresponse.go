package shared

// VerifyCustomTokenResponse
// Response from verifying a custom token
type VerifyCustomTokenResponse struct {
	ExpiresIn    *string `json:"expiresIn,omitempty"`
	IDToken      *string `json:"idToken,omitempty"`
	IsNewUser    *bool   `json:"isNewUser,omitempty"`
	Kind         *string `json:"kind,omitempty"`
	RefreshToken *string `json:"refreshToken,omitempty"`
}

package shared

type SignupNewUserResponse struct {
	DisplayName  *string `json:"displayName,omitempty"`
	Email        *string `json:"email,omitempty"`
	ExpiresIn    *string `json:"expiresIn,omitempty"`
	IDToken      *string `json:"idToken,omitempty"`
	Kind         *string `json:"kind,omitempty"`
	LocalID      *string `json:"localId,omitempty"`
	RefreshToken *string `json:"refreshToken,omitempty"`
}

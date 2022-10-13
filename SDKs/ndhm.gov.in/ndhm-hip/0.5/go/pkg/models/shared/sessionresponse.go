package shared

type SessionResponse struct {
	AccessToken      *string `json:"accessToken"`
	ExpiresIn        *int64  `json:"expiresIn"`
	RefreshExpiresIn *int64  `json:"refreshExpiresIn"`
	RefreshToken     *string `json:"refreshToken"`
	TokenType        *string `json:"tokenType"`
}

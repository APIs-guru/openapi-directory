package shared

// GoogleCloudIntegrationsV1alphaAccessToken
// The access token represents the authorization of a specific application to access specific parts of a user’s data.
type GoogleCloudIntegrationsV1alphaAccessToken struct {
	AccessToken            *string `json:"accessToken,omitempty"`
	AccessTokenExpireTime  *string `json:"accessTokenExpireTime,omitempty"`
	RefreshToken           *string `json:"refreshToken,omitempty"`
	RefreshTokenExpireTime *string `json:"refreshTokenExpireTime,omitempty"`
	TokenType              *string `json:"tokenType,omitempty"`
}

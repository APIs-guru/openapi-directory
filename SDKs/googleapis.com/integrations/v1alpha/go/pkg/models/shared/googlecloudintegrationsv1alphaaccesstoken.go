package shared

type GoogleCloudIntegrationsV1alphaAccessToken struct {
	AccessToken            *string `json:"accessToken"`
	AccessTokenExpireTime  *string `json:"accessTokenExpireTime"`
	RefreshToken           *string `json:"refreshToken"`
	RefreshTokenExpireTime *string `json:"refreshTokenExpireTime"`
	TokenType              *string `json:"tokenType"`
}

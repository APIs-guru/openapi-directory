package shared

type GenerateAccessTokenResponse struct {
	AccessToken *string `json:"accessToken"`
	ExpireTime  *string `json:"expireTime"`
}

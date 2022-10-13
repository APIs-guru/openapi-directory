package shared

type AuthorizeEnvironmentRequest struct {
	AccessToken *string `json:"accessToken"`
	ExpireTime  *string `json:"expireTime"`
	IDToken     *string `json:"idToken"`
}

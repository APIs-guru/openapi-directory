package shared

type RefreshRuntimeTokenInternalResponse struct {
	AccessToken *string `json:"accessToken"`
	ExpireTime  *string `json:"expireTime"`
}

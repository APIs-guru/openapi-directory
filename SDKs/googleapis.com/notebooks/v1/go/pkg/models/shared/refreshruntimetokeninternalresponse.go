package shared

// RefreshRuntimeTokenInternalResponse
// Response with a new access token.
type RefreshRuntimeTokenInternalResponse struct {
	AccessToken *string `json:"accessToken,omitempty"`
	ExpireTime  *string `json:"expireTime,omitempty"`
}

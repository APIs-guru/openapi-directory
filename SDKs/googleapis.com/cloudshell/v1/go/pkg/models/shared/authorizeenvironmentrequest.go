package shared

// AuthorizeEnvironmentRequest
// Request message for AuthorizeEnvironment.
type AuthorizeEnvironmentRequest struct {
	AccessToken *string `json:"accessToken,omitempty"`
	ExpireTime  *string `json:"expireTime,omitempty"`
	IDToken     *string `json:"idToken,omitempty"`
}

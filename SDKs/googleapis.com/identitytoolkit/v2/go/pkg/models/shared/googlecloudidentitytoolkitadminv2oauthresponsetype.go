package shared

// GoogleCloudIdentitytoolkitAdminV2OAuthResponseType
// The response type to request for in the OAuth authorization flow. You can set either `id_token` or `code` to true, but not both. Setting both types to be simultaneously true (`{code: true, id_token: true}`) is not yet supported. See https://openid.net/specs/openid-connect-core-1_0.html#Authentication for a mapping of response type to OAuth 2.0 flow.
type GoogleCloudIdentitytoolkitAdminV2OAuthResponseType struct {
	Code    *bool `json:"code,omitempty"`
	IDToken *bool `json:"idToken,omitempty"`
	Token   *bool `json:"token,omitempty"`
}

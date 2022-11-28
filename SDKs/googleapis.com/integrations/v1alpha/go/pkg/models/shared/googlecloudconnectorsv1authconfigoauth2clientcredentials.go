package shared

// GoogleCloudConnectorsV1AuthConfigOauth2ClientCredentials
// Parameters to support Oauth 2.0 Client Credentials Grant Authentication. See https://tools.ietf.org/html/rfc6749#section-1.3.4 for more details.
type GoogleCloudConnectorsV1AuthConfigOauth2ClientCredentials struct {
	ClientID     *string                        `json:"clientId,omitempty"`
	ClientSecret *GoogleCloudConnectorsV1Secret `json:"clientSecret,omitempty"`
}

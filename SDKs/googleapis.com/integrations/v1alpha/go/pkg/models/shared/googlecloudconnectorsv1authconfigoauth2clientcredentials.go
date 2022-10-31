package shared

type GoogleCloudConnectorsV1AuthConfigOauth2ClientCredentials struct {
	ClientID     *string                        `json:"clientId,omitempty"`
	ClientSecret *GoogleCloudConnectorsV1Secret `json:"clientSecret,omitempty"`
}

package shared

type GoogleCloudConnectorsV1AuthConfigOauth2ClientCredentials struct {
	ClientID     *string                        `json:"clientId"`
	ClientSecret *GoogleCloudConnectorsV1Secret `json:"clientSecret"`
}

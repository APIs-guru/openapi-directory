package shared

type GoogleCloudIntegrationsV1alphaOAuth2ClientCredentialsRequestTypeEnum string

const (
	GoogleCloudIntegrationsV1alphaOAuth2ClientCredentialsRequestTypeEnumRequestTypeUnspecified GoogleCloudIntegrationsV1alphaOAuth2ClientCredentialsRequestTypeEnum = "REQUEST_TYPE_UNSPECIFIED"
	GoogleCloudIntegrationsV1alphaOAuth2ClientCredentialsRequestTypeEnumRequestBody            GoogleCloudIntegrationsV1alphaOAuth2ClientCredentialsRequestTypeEnum = "REQUEST_BODY"
	GoogleCloudIntegrationsV1alphaOAuth2ClientCredentialsRequestTypeEnumQueryParameters        GoogleCloudIntegrationsV1alphaOAuth2ClientCredentialsRequestTypeEnum = "QUERY_PARAMETERS"
	GoogleCloudIntegrationsV1alphaOAuth2ClientCredentialsRequestTypeEnumEncodedHeader          GoogleCloudIntegrationsV1alphaOAuth2ClientCredentialsRequestTypeEnum = "ENCODED_HEADER"
)

// GoogleCloudIntegrationsV1alphaOAuth2ClientCredentials
// For client credentials grant, the client sends a POST request with grant_type as 'client_credentials' to the authorization server. The authorization server will respond with a JSON object containing the access token.
type GoogleCloudIntegrationsV1alphaOAuth2ClientCredentials struct {
	AccessToken   *GoogleCloudIntegrationsV1alphaAccessToken                            `json:"accessToken,omitempty"`
	ClientID      *string                                                               `json:"clientId,omitempty"`
	ClientSecret  *string                                                               `json:"clientSecret,omitempty"`
	RequestType   *GoogleCloudIntegrationsV1alphaOAuth2ClientCredentialsRequestTypeEnum `json:"requestType,omitempty"`
	Scope         *string                                                               `json:"scope,omitempty"`
	TokenEndpoint *string                                                               `json:"tokenEndpoint,omitempty"`
	TokenParams   *GoogleCloudIntegrationsV1alphaParameterMap                           `json:"tokenParams,omitempty"`
}

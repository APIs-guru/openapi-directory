package shared

type GoogleCloudIntegrationsV1alphaOAuth2ClientCredentialsRequestTypeEnum string

const (
	GoogleCloudIntegrationsV1alphaOAuth2ClientCredentialsRequestTypeEnumRequestTypeUnspecified GoogleCloudIntegrationsV1alphaOAuth2ClientCredentialsRequestTypeEnum = "REQUEST_TYPE_UNSPECIFIED"
	GoogleCloudIntegrationsV1alphaOAuth2ClientCredentialsRequestTypeEnumRequestBody            GoogleCloudIntegrationsV1alphaOAuth2ClientCredentialsRequestTypeEnum = "REQUEST_BODY"
	GoogleCloudIntegrationsV1alphaOAuth2ClientCredentialsRequestTypeEnumQueryParameters        GoogleCloudIntegrationsV1alphaOAuth2ClientCredentialsRequestTypeEnum = "QUERY_PARAMETERS"
	GoogleCloudIntegrationsV1alphaOAuth2ClientCredentialsRequestTypeEnumEncodedHeader          GoogleCloudIntegrationsV1alphaOAuth2ClientCredentialsRequestTypeEnum = "ENCODED_HEADER"
)

type GoogleCloudIntegrationsV1alphaOAuth2ClientCredentials struct {
	AccessToken   *GoogleCloudIntegrationsV1alphaAccessToken                            `json:"accessToken"`
	ClientID      *string                                                               `json:"clientId"`
	ClientSecret  *string                                                               `json:"clientSecret"`
	RequestType   *GoogleCloudIntegrationsV1alphaOAuth2ClientCredentialsRequestTypeEnum `json:"requestType"`
	Scope         *string                                                               `json:"scope"`
	TokenEndpoint *string                                                               `json:"tokenEndpoint"`
	TokenParams   *GoogleCloudIntegrationsV1alphaParameterMap                           `json:"tokenParams"`
}

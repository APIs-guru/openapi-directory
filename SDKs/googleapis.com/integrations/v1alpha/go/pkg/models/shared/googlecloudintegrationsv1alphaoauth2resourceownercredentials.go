package shared

type GoogleCloudIntegrationsV1alphaOAuth2ResourceOwnerCredentialsRequestTypeEnum string

const (
	GoogleCloudIntegrationsV1alphaOAuth2ResourceOwnerCredentialsRequestTypeEnumRequestTypeUnspecified GoogleCloudIntegrationsV1alphaOAuth2ResourceOwnerCredentialsRequestTypeEnum = "REQUEST_TYPE_UNSPECIFIED"
	GoogleCloudIntegrationsV1alphaOAuth2ResourceOwnerCredentialsRequestTypeEnumRequestBody            GoogleCloudIntegrationsV1alphaOAuth2ResourceOwnerCredentialsRequestTypeEnum = "REQUEST_BODY"
	GoogleCloudIntegrationsV1alphaOAuth2ResourceOwnerCredentialsRequestTypeEnumQueryParameters        GoogleCloudIntegrationsV1alphaOAuth2ResourceOwnerCredentialsRequestTypeEnum = "QUERY_PARAMETERS"
	GoogleCloudIntegrationsV1alphaOAuth2ResourceOwnerCredentialsRequestTypeEnumEncodedHeader          GoogleCloudIntegrationsV1alphaOAuth2ResourceOwnerCredentialsRequestTypeEnum = "ENCODED_HEADER"
)

type GoogleCloudIntegrationsV1alphaOAuth2ResourceOwnerCredentials struct {
	AccessToken   *GoogleCloudIntegrationsV1alphaAccessToken                                   `json:"accessToken"`
	ClientID      *string                                                                      `json:"clientId"`
	ClientSecret  *string                                                                      `json:"clientSecret"`
	Password      *string                                                                      `json:"password"`
	RequestType   *GoogleCloudIntegrationsV1alphaOAuth2ResourceOwnerCredentialsRequestTypeEnum `json:"requestType"`
	Scope         *string                                                                      `json:"scope"`
	TokenEndpoint *string                                                                      `json:"tokenEndpoint"`
	TokenParams   *GoogleCloudIntegrationsV1alphaParameterMap                                  `json:"tokenParams"`
	Username      *string                                                                      `json:"username"`
}

package shared

type GoogleCloudIntegrationsV1alphaOAuth2ResourceOwnerCredentialsRequestTypeEnum string

const (
	GoogleCloudIntegrationsV1alphaOAuth2ResourceOwnerCredentialsRequestTypeEnumRequestTypeUnspecified GoogleCloudIntegrationsV1alphaOAuth2ResourceOwnerCredentialsRequestTypeEnum = "REQUEST_TYPE_UNSPECIFIED"
	GoogleCloudIntegrationsV1alphaOAuth2ResourceOwnerCredentialsRequestTypeEnumRequestBody            GoogleCloudIntegrationsV1alphaOAuth2ResourceOwnerCredentialsRequestTypeEnum = "REQUEST_BODY"
	GoogleCloudIntegrationsV1alphaOAuth2ResourceOwnerCredentialsRequestTypeEnumQueryParameters        GoogleCloudIntegrationsV1alphaOAuth2ResourceOwnerCredentialsRequestTypeEnum = "QUERY_PARAMETERS"
	GoogleCloudIntegrationsV1alphaOAuth2ResourceOwnerCredentialsRequestTypeEnumEncodedHeader          GoogleCloudIntegrationsV1alphaOAuth2ResourceOwnerCredentialsRequestTypeEnum = "ENCODED_HEADER"
)

type GoogleCloudIntegrationsV1alphaOAuth2ResourceOwnerCredentials struct {
	AccessToken   *GoogleCloudIntegrationsV1alphaAccessToken                                   `json:"accessToken,omitempty"`
	ClientID      *string                                                                      `json:"clientId,omitempty"`
	ClientSecret  *string                                                                      `json:"clientSecret,omitempty"`
	Password      *string                                                                      `json:"password,omitempty"`
	RequestType   *GoogleCloudIntegrationsV1alphaOAuth2ResourceOwnerCredentialsRequestTypeEnum `json:"requestType,omitempty"`
	Scope         *string                                                                      `json:"scope,omitempty"`
	TokenEndpoint *string                                                                      `json:"tokenEndpoint,omitempty"`
	TokenParams   *GoogleCloudIntegrationsV1alphaParameterMap                                  `json:"tokenParams,omitempty"`
	Username      *string                                                                      `json:"username,omitempty"`
}

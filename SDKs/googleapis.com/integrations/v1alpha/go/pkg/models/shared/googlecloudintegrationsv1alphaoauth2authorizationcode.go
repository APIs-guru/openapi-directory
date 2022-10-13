package shared

type GoogleCloudIntegrationsV1alphaOAuth2AuthorizationCodeRequestTypeEnum string

const (
	GoogleCloudIntegrationsV1alphaOAuth2AuthorizationCodeRequestTypeEnumRequestTypeUnspecified GoogleCloudIntegrationsV1alphaOAuth2AuthorizationCodeRequestTypeEnum = "REQUEST_TYPE_UNSPECIFIED"
	GoogleCloudIntegrationsV1alphaOAuth2AuthorizationCodeRequestTypeEnumRequestBody            GoogleCloudIntegrationsV1alphaOAuth2AuthorizationCodeRequestTypeEnum = "REQUEST_BODY"
	GoogleCloudIntegrationsV1alphaOAuth2AuthorizationCodeRequestTypeEnumQueryParameters        GoogleCloudIntegrationsV1alphaOAuth2AuthorizationCodeRequestTypeEnum = "QUERY_PARAMETERS"
	GoogleCloudIntegrationsV1alphaOAuth2AuthorizationCodeRequestTypeEnumEncodedHeader          GoogleCloudIntegrationsV1alphaOAuth2AuthorizationCodeRequestTypeEnum = "ENCODED_HEADER"
)

type GoogleCloudIntegrationsV1alphaOAuth2AuthorizationCode struct {
	AccessToken       *GoogleCloudIntegrationsV1alphaAccessToken                            `json:"accessToken"`
	ApplyReauthPolicy *bool                                                                 `json:"applyReauthPolicy"`
	AuthCode          *string                                                               `json:"authCode"`
	AuthEndpoint      *string                                                               `json:"authEndpoint"`
	AuthParams        *GoogleCloudIntegrationsV1alphaParameterMap                           `json:"authParams"`
	ClientID          *string                                                               `json:"clientId"`
	ClientSecret      *string                                                               `json:"clientSecret"`
	RequestType       *GoogleCloudIntegrationsV1alphaOAuth2AuthorizationCodeRequestTypeEnum `json:"requestType"`
	Scope             *string                                                               `json:"scope"`
	TokenEndpoint     *string                                                               `json:"tokenEndpoint"`
	TokenParams       *GoogleCloudIntegrationsV1alphaParameterMap                           `json:"tokenParams"`
}

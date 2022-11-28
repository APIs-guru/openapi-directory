package shared

type GoogleCloudIntegrationsV1alphaOAuth2AuthorizationCodeRequestTypeEnum string

const (
	GoogleCloudIntegrationsV1alphaOAuth2AuthorizationCodeRequestTypeEnumRequestTypeUnspecified GoogleCloudIntegrationsV1alphaOAuth2AuthorizationCodeRequestTypeEnum = "REQUEST_TYPE_UNSPECIFIED"
	GoogleCloudIntegrationsV1alphaOAuth2AuthorizationCodeRequestTypeEnumRequestBody            GoogleCloudIntegrationsV1alphaOAuth2AuthorizationCodeRequestTypeEnum = "REQUEST_BODY"
	GoogleCloudIntegrationsV1alphaOAuth2AuthorizationCodeRequestTypeEnumQueryParameters        GoogleCloudIntegrationsV1alphaOAuth2AuthorizationCodeRequestTypeEnum = "QUERY_PARAMETERS"
	GoogleCloudIntegrationsV1alphaOAuth2AuthorizationCodeRequestTypeEnumEncodedHeader          GoogleCloudIntegrationsV1alphaOAuth2AuthorizationCodeRequestTypeEnum = "ENCODED_HEADER"
)

// GoogleCloudIntegrationsV1alphaOAuth2AuthorizationCode
// The OAuth Type where the client sends request with the client id and requested scopes to auth endpoint. User sees a consent screen and auth code is received at specified redirect url afterwards. The auth code is then combined with the client id and secret and sent to the token endpoint in exchange for the access and refresh token. The refresh token can be used to fetch new access tokens.
type GoogleCloudIntegrationsV1alphaOAuth2AuthorizationCode struct {
	AccessToken       *GoogleCloudIntegrationsV1alphaAccessToken                            `json:"accessToken,omitempty"`
	ApplyReauthPolicy *bool                                                                 `json:"applyReauthPolicy,omitempty"`
	AuthCode          *string                                                               `json:"authCode,omitempty"`
	AuthEndpoint      *string                                                               `json:"authEndpoint,omitempty"`
	AuthParams        *GoogleCloudIntegrationsV1alphaParameterMap                           `json:"authParams,omitempty"`
	ClientID          *string                                                               `json:"clientId,omitempty"`
	ClientSecret      *string                                                               `json:"clientSecret,omitempty"`
	RequestType       *GoogleCloudIntegrationsV1alphaOAuth2AuthorizationCodeRequestTypeEnum `json:"requestType,omitempty"`
	Scope             *string                                                               `json:"scope,omitempty"`
	TokenEndpoint     *string                                                               `json:"tokenEndpoint,omitempty"`
	TokenParams       *GoogleCloudIntegrationsV1alphaParameterMap                           `json:"tokenParams,omitempty"`
}

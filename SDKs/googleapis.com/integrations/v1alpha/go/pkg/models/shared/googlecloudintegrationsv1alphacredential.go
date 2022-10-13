package shared

type GoogleCloudIntegrationsV1alphaCredentialCredentialTypeEnum string

const (
	GoogleCloudIntegrationsV1alphaCredentialCredentialTypeEnumCredentialTypeUnspecified      GoogleCloudIntegrationsV1alphaCredentialCredentialTypeEnum = "CREDENTIAL_TYPE_UNSPECIFIED"
	GoogleCloudIntegrationsV1alphaCredentialCredentialTypeEnumUsernameAndPassword            GoogleCloudIntegrationsV1alphaCredentialCredentialTypeEnum = "USERNAME_AND_PASSWORD"
	GoogleCloudIntegrationsV1alphaCredentialCredentialTypeEnumAPIKey                         GoogleCloudIntegrationsV1alphaCredentialCredentialTypeEnum = "API_KEY"
	GoogleCloudIntegrationsV1alphaCredentialCredentialTypeEnumOauth2AuthorizationCode        GoogleCloudIntegrationsV1alphaCredentialCredentialTypeEnum = "OAUTH2_AUTHORIZATION_CODE"
	GoogleCloudIntegrationsV1alphaCredentialCredentialTypeEnumOauth2Implicit                 GoogleCloudIntegrationsV1alphaCredentialCredentialTypeEnum = "OAUTH2_IMPLICIT"
	GoogleCloudIntegrationsV1alphaCredentialCredentialTypeEnumOauth2ClientCredentials        GoogleCloudIntegrationsV1alphaCredentialCredentialTypeEnum = "OAUTH2_CLIENT_CREDENTIALS"
	GoogleCloudIntegrationsV1alphaCredentialCredentialTypeEnumOauth2ResourceOwnerCredentials GoogleCloudIntegrationsV1alphaCredentialCredentialTypeEnum = "OAUTH2_RESOURCE_OWNER_CREDENTIALS"
	GoogleCloudIntegrationsV1alphaCredentialCredentialTypeEnumJwt                            GoogleCloudIntegrationsV1alphaCredentialCredentialTypeEnum = "JWT"
	GoogleCloudIntegrationsV1alphaCredentialCredentialTypeEnumAuthToken                      GoogleCloudIntegrationsV1alphaCredentialCredentialTypeEnum = "AUTH_TOKEN"
	GoogleCloudIntegrationsV1alphaCredentialCredentialTypeEnumServiceAccount                 GoogleCloudIntegrationsV1alphaCredentialCredentialTypeEnum = "SERVICE_ACCOUNT"
	GoogleCloudIntegrationsV1alphaCredentialCredentialTypeEnumClientCertificateOnly          GoogleCloudIntegrationsV1alphaCredentialCredentialTypeEnum = "CLIENT_CERTIFICATE_ONLY"
	GoogleCloudIntegrationsV1alphaCredentialCredentialTypeEnumOidcToken                      GoogleCloudIntegrationsV1alphaCredentialCredentialTypeEnum = "OIDC_TOKEN"
)

type GoogleCloudIntegrationsV1alphaCredential struct {
	AuthToken                      *GoogleCloudIntegrationsV1alphaAuthToken                      `json:"authToken"`
	CredentialType                 *GoogleCloudIntegrationsV1alphaCredentialCredentialTypeEnum   `json:"credentialType"`
	Jwt                            *GoogleCloudIntegrationsV1alphaJwt                            `json:"jwt"`
	Oauth2AuthorizationCode        *GoogleCloudIntegrationsV1alphaOAuth2AuthorizationCode        `json:"oauth2AuthorizationCode"`
	Oauth2ClientCredentials        *GoogleCloudIntegrationsV1alphaOAuth2ClientCredentials        `json:"oauth2ClientCredentials"`
	Oauth2ResourceOwnerCredentials *GoogleCloudIntegrationsV1alphaOAuth2ResourceOwnerCredentials `json:"oauth2ResourceOwnerCredentials"`
	OidcToken                      *GoogleCloudIntegrationsV1alphaOidcToken                      `json:"oidcToken"`
	ServiceAccountCredentials      *GoogleCloudIntegrationsV1alphaServiceAccountCredentials      `json:"serviceAccountCredentials"`
	UsernameAndPassword            *GoogleCloudIntegrationsV1alphaUsernameAndPassword            `json:"usernameAndPassword"`
}

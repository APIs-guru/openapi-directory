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

// GoogleCloudIntegrationsV1alphaCredential
// Defines parameters for a single, canonical credential.
type GoogleCloudIntegrationsV1alphaCredential struct {
	AuthToken                      *GoogleCloudIntegrationsV1alphaAuthToken                      `json:"authToken,omitempty"`
	CredentialType                 *GoogleCloudIntegrationsV1alphaCredentialCredentialTypeEnum   `json:"credentialType,omitempty"`
	Jwt                            *GoogleCloudIntegrationsV1alphaJwt                            `json:"jwt,omitempty"`
	Oauth2AuthorizationCode        *GoogleCloudIntegrationsV1alphaOAuth2AuthorizationCode        `json:"oauth2AuthorizationCode,omitempty"`
	Oauth2ClientCredentials        *GoogleCloudIntegrationsV1alphaOAuth2ClientCredentials        `json:"oauth2ClientCredentials,omitempty"`
	Oauth2ResourceOwnerCredentials *GoogleCloudIntegrationsV1alphaOAuth2ResourceOwnerCredentials `json:"oauth2ResourceOwnerCredentials,omitempty"`
	OidcToken                      *GoogleCloudIntegrationsV1alphaOidcToken                      `json:"oidcToken,omitempty"`
	ServiceAccountCredentials      *GoogleCloudIntegrationsV1alphaServiceAccountCredentials      `json:"serviceAccountCredentials,omitempty"`
	UsernameAndPassword            *GoogleCloudIntegrationsV1alphaUsernameAndPassword            `json:"usernameAndPassword,omitempty"`
}

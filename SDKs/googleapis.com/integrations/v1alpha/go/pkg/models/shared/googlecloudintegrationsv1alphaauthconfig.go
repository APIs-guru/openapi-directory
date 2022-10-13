package shared

type GoogleCloudIntegrationsV1alphaAuthConfigCredentialTypeEnum string

const (
	GoogleCloudIntegrationsV1alphaAuthConfigCredentialTypeEnumCredentialTypeUnspecified      GoogleCloudIntegrationsV1alphaAuthConfigCredentialTypeEnum = "CREDENTIAL_TYPE_UNSPECIFIED"
	GoogleCloudIntegrationsV1alphaAuthConfigCredentialTypeEnumUsernameAndPassword            GoogleCloudIntegrationsV1alphaAuthConfigCredentialTypeEnum = "USERNAME_AND_PASSWORD"
	GoogleCloudIntegrationsV1alphaAuthConfigCredentialTypeEnumAPIKey                         GoogleCloudIntegrationsV1alphaAuthConfigCredentialTypeEnum = "API_KEY"
	GoogleCloudIntegrationsV1alphaAuthConfigCredentialTypeEnumOauth2AuthorizationCode        GoogleCloudIntegrationsV1alphaAuthConfigCredentialTypeEnum = "OAUTH2_AUTHORIZATION_CODE"
	GoogleCloudIntegrationsV1alphaAuthConfigCredentialTypeEnumOauth2Implicit                 GoogleCloudIntegrationsV1alphaAuthConfigCredentialTypeEnum = "OAUTH2_IMPLICIT"
	GoogleCloudIntegrationsV1alphaAuthConfigCredentialTypeEnumOauth2ClientCredentials        GoogleCloudIntegrationsV1alphaAuthConfigCredentialTypeEnum = "OAUTH2_CLIENT_CREDENTIALS"
	GoogleCloudIntegrationsV1alphaAuthConfigCredentialTypeEnumOauth2ResourceOwnerCredentials GoogleCloudIntegrationsV1alphaAuthConfigCredentialTypeEnum = "OAUTH2_RESOURCE_OWNER_CREDENTIALS"
	GoogleCloudIntegrationsV1alphaAuthConfigCredentialTypeEnumJwt                            GoogleCloudIntegrationsV1alphaAuthConfigCredentialTypeEnum = "JWT"
	GoogleCloudIntegrationsV1alphaAuthConfigCredentialTypeEnumAuthToken                      GoogleCloudIntegrationsV1alphaAuthConfigCredentialTypeEnum = "AUTH_TOKEN"
	GoogleCloudIntegrationsV1alphaAuthConfigCredentialTypeEnumServiceAccount                 GoogleCloudIntegrationsV1alphaAuthConfigCredentialTypeEnum = "SERVICE_ACCOUNT"
	GoogleCloudIntegrationsV1alphaAuthConfigCredentialTypeEnumClientCertificateOnly          GoogleCloudIntegrationsV1alphaAuthConfigCredentialTypeEnum = "CLIENT_CERTIFICATE_ONLY"
	GoogleCloudIntegrationsV1alphaAuthConfigCredentialTypeEnumOidcToken                      GoogleCloudIntegrationsV1alphaAuthConfigCredentialTypeEnum = "OIDC_TOKEN"
)

type GoogleCloudIntegrationsV1alphaAuthConfigStateEnum string

const (
	GoogleCloudIntegrationsV1alphaAuthConfigStateEnumStateUnspecified GoogleCloudIntegrationsV1alphaAuthConfigStateEnum = "STATE_UNSPECIFIED"
	GoogleCloudIntegrationsV1alphaAuthConfigStateEnumValid            GoogleCloudIntegrationsV1alphaAuthConfigStateEnum = "VALID"
	GoogleCloudIntegrationsV1alphaAuthConfigStateEnumInvalid          GoogleCloudIntegrationsV1alphaAuthConfigStateEnum = "INVALID"
	GoogleCloudIntegrationsV1alphaAuthConfigStateEnumSoftDeleted      GoogleCloudIntegrationsV1alphaAuthConfigStateEnum = "SOFT_DELETED"
	GoogleCloudIntegrationsV1alphaAuthConfigStateEnumExpired          GoogleCloudIntegrationsV1alphaAuthConfigStateEnum = "EXPIRED"
	GoogleCloudIntegrationsV1alphaAuthConfigStateEnumUnauthorized     GoogleCloudIntegrationsV1alphaAuthConfigStateEnum = "UNAUTHORIZED"
	GoogleCloudIntegrationsV1alphaAuthConfigStateEnumUnsupported      GoogleCloudIntegrationsV1alphaAuthConfigStateEnum = "UNSUPPORTED"
)

type GoogleCloudIntegrationsV1alphaAuthConfigVisibilityEnum string

const (
	GoogleCloudIntegrationsV1alphaAuthConfigVisibilityEnumAuthConfigVisibilityUnspecified GoogleCloudIntegrationsV1alphaAuthConfigVisibilityEnum = "AUTH_CONFIG_VISIBILITY_UNSPECIFIED"
	GoogleCloudIntegrationsV1alphaAuthConfigVisibilityEnumPrivate                         GoogleCloudIntegrationsV1alphaAuthConfigVisibilityEnum = "PRIVATE"
	GoogleCloudIntegrationsV1alphaAuthConfigVisibilityEnumClientVisible                   GoogleCloudIntegrationsV1alphaAuthConfigVisibilityEnum = "CLIENT_VISIBLE"
)

type GoogleCloudIntegrationsV1alphaAuthConfig struct {
	CertificateID              *string                                                     `json:"certificateId"`
	CreateTime                 *string                                                     `json:"createTime"`
	CreatorEmail               *string                                                     `json:"creatorEmail"`
	CredentialType             *GoogleCloudIntegrationsV1alphaAuthConfigCredentialTypeEnum `json:"credentialType"`
	DecryptedCredential        *GoogleCloudIntegrationsV1alphaCredential                   `json:"decryptedCredential"`
	Description                *string                                                     `json:"description"`
	DisplayName                *string                                                     `json:"displayName"`
	EncryptedCredential        *string                                                     `json:"encryptedCredential"`
	ExpiryNotificationDuration []string                                                    `json:"expiryNotificationDuration"`
	LastModifierEmail          *string                                                     `json:"lastModifierEmail"`
	Name                       *string                                                     `json:"name"`
	OverrideValidTime          *string                                                     `json:"overrideValidTime"`
	Reason                     *string                                                     `json:"reason"`
	State                      *GoogleCloudIntegrationsV1alphaAuthConfigStateEnum          `json:"state"`
	UpdateTime                 *string                                                     `json:"updateTime"`
	ValidTime                  *string                                                     `json:"validTime"`
	Visibility                 *GoogleCloudIntegrationsV1alphaAuthConfigVisibilityEnum     `json:"visibility"`
}

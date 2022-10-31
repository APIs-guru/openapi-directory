package shared

type AuthConfigTemplateAuthTypeEnum string

const (
	AuthConfigTemplateAuthTypeEnumAuthTypeUnspecified     AuthConfigTemplateAuthTypeEnum = "AUTH_TYPE_UNSPECIFIED"
	AuthConfigTemplateAuthTypeEnumUserPassword            AuthConfigTemplateAuthTypeEnum = "USER_PASSWORD"
	AuthConfigTemplateAuthTypeEnumOauth2JwtBearer         AuthConfigTemplateAuthTypeEnum = "OAUTH2_JWT_BEARER"
	AuthConfigTemplateAuthTypeEnumOauth2ClientCredentials AuthConfigTemplateAuthTypeEnum = "OAUTH2_CLIENT_CREDENTIALS"
	AuthConfigTemplateAuthTypeEnumSSHPublicKey            AuthConfigTemplateAuthTypeEnum = "SSH_PUBLIC_KEY"
	AuthConfigTemplateAuthTypeEnumOauth2AuthCodeFlow      AuthConfigTemplateAuthTypeEnum = "OAUTH2_AUTH_CODE_FLOW"
)

type AuthConfigTemplate struct {
	AuthType                *AuthConfigTemplateAuthTypeEnum `json:"authType,omitempty"`
	ConfigVariableTemplates []ConfigVariableTemplate        `json:"configVariableTemplates,omitempty"`
}

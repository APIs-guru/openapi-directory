package shared

type AuthConfigAuthTypeEnum string

const (
	AuthConfigAuthTypeEnumAuthTypeUnspecified     AuthConfigAuthTypeEnum = "AUTH_TYPE_UNSPECIFIED"
	AuthConfigAuthTypeEnumUserPassword            AuthConfigAuthTypeEnum = "USER_PASSWORD"
	AuthConfigAuthTypeEnumOauth2JwtBearer         AuthConfigAuthTypeEnum = "OAUTH2_JWT_BEARER"
	AuthConfigAuthTypeEnumOauth2ClientCredentials AuthConfigAuthTypeEnum = "OAUTH2_CLIENT_CREDENTIALS"
	AuthConfigAuthTypeEnumSSHPublicKey            AuthConfigAuthTypeEnum = "SSH_PUBLIC_KEY"
	AuthConfigAuthTypeEnumOauth2AuthCodeFlow      AuthConfigAuthTypeEnum = "OAUTH2_AUTH_CODE_FLOW"
)

type AuthConfig struct {
	AdditionalVariables     []ConfigVariable         `json:"additionalVariables,omitempty"`
	AuthType                *AuthConfigAuthTypeEnum  `json:"authType,omitempty"`
	Oauth2ClientCredentials *Oauth2ClientCredentials `json:"oauth2ClientCredentials,omitempty"`
	Oauth2JwtBearer         *Oauth2JwtBearer         `json:"oauth2JwtBearer,omitempty"`
	SSHPublicKey            *SSHPublicKey            `json:"sshPublicKey,omitempty"`
	UserPassword            *UserPassword            `json:"userPassword,omitempty"`
}

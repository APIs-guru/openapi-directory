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
	AdditionalVariables     []ConfigVariable         `json:"additionalVariables"`
	AuthType                *AuthConfigAuthTypeEnum  `json:"authType"`
	Oauth2ClientCredentials *Oauth2ClientCredentials `json:"oauth2ClientCredentials"`
	Oauth2JwtBearer         *Oauth2JwtBearer         `json:"oauth2JwtBearer"`
	SSHPublicKey            *SSHPublicKey            `json:"sshPublicKey"`
	UserPassword            *UserPassword            `json:"userPassword"`
}

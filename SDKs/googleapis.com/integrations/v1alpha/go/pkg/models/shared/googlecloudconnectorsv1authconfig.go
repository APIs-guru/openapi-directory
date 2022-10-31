package shared




type GoogleCloudConnectorsV1AuthConfigAuthTypeEnum string

const (
    GoogleCloudConnectorsV1AuthConfigAuthTypeEnumAuthTypeUnspecified GoogleCloudConnectorsV1AuthConfigAuthTypeEnum = "AUTH_TYPE_UNSPECIFIED"
GoogleCloudConnectorsV1AuthConfigAuthTypeEnumUserPassword GoogleCloudConnectorsV1AuthConfigAuthTypeEnum = "USER_PASSWORD"
GoogleCloudConnectorsV1AuthConfigAuthTypeEnumOauth2JwtBearer GoogleCloudConnectorsV1AuthConfigAuthTypeEnum = "OAUTH2_JWT_BEARER"
GoogleCloudConnectorsV1AuthConfigAuthTypeEnumOauth2ClientCredentials GoogleCloudConnectorsV1AuthConfigAuthTypeEnum = "OAUTH2_CLIENT_CREDENTIALS"
GoogleCloudConnectorsV1AuthConfigAuthTypeEnumSSHPublicKey GoogleCloudConnectorsV1AuthConfigAuthTypeEnum = "SSH_PUBLIC_KEY"
GoogleCloudConnectorsV1AuthConfigAuthTypeEnumOauth2AuthCodeFlow GoogleCloudConnectorsV1AuthConfigAuthTypeEnum = "OAUTH2_AUTH_CODE_FLOW"
)


type GoogleCloudConnectorsV1AuthConfig struct {
    AdditionalVariables []GoogleCloudConnectorsV1ConfigVariable `json:"additionalVariables,omitempty"`
    AuthType *GoogleCloudConnectorsV1AuthConfigAuthTypeEnum `json:"authType,omitempty"`
    Oauth2ClientCredentials *GoogleCloudConnectorsV1AuthConfigOauth2ClientCredentials `json:"oauth2ClientCredentials,omitempty"`
    Oauth2JwtBearer *GoogleCloudConnectorsV1AuthConfigOauth2JwtBearer `json:"oauth2JwtBearer,omitempty"`
    SSHPublicKey *GoogleCloudConnectorsV1AuthConfigSSHPublicKey `json:"sshPublicKey,omitempty"`
    UserPassword *GoogleCloudConnectorsV1AuthConfigUserPassword `json:"userPassword,omitempty"`
    
}


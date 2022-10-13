package shared

type SamlIdpConfig struct {
	ChangePasswordURI      *string `json:"changePasswordUri"`
	EntityID               *string `json:"entityId"`
	LogoutRedirectURI      *string `json:"logoutRedirectUri"`
	SingleSignOnServiceURI *string `json:"singleSignOnServiceUri"`
}

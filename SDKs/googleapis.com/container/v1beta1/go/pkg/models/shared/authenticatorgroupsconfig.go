package shared

type AuthenticatorGroupsConfig struct {
	Enabled       *bool   `json:"enabled,omitempty"`
	SecurityGroup *string `json:"securityGroup,omitempty"`
}

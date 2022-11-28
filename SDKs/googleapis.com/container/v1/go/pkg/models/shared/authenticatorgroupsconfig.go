package shared

// AuthenticatorGroupsConfig
// Configuration for returning group information from authenticators.
type AuthenticatorGroupsConfig struct {
	Enabled       *bool   `json:"enabled,omitempty"`
	SecurityGroup *string `json:"securityGroup,omitempty"`
}

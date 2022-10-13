package shared

type AuthenticatorGroupsConfig struct {
	Enabled       *bool   `json:"enabled"`
	SecurityGroup *string `json:"securityGroup"`
}

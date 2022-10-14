package shared

type IdpConfig struct {
	ClientID             *string  `json:"clientId,omitempty"`
	Enabled              *bool    `json:"enabled,omitempty"`
	ExperimentPercent    *int32   `json:"experimentPercent,omitempty"`
	Provider             *string  `json:"provider,omitempty"`
	Secret               *string  `json:"secret,omitempty"`
	WhitelistedAudiences []string `json:"whitelistedAudiences,omitempty"`
}

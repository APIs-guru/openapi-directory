package shared

type IdpConfig struct {
	ClientID             *string  `json:"clientId"`
	Enabled              *bool    `json:"enabled"`
	ExperimentPercent    *int32   `json:"experimentPercent"`
	Provider             *string  `json:"provider"`
	Secret               *string  `json:"secret"`
	WhitelistedAudiences []string `json:"whitelistedAudiences"`
}

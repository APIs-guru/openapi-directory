package shared

// AccessSettings
// Access related settings for IAP protected apps.
type AccessSettings struct {
	AllowedDomainsSettings   *AllowedDomainsSettings   `json:"allowedDomainsSettings,omitempty"`
	CorsSettings             *CorsSettings             `json:"corsSettings,omitempty"`
	GcipSettings             *GcipSettings             `json:"gcipSettings,omitempty"`
	OauthSettings            *OAuthSettings            `json:"oauthSettings,omitempty"`
	PolicyDelegationSettings *PolicyDelegationSettings `json:"policyDelegationSettings,omitempty"`
	ReauthSettings           *ReauthSettings           `json:"reauthSettings,omitempty"`
}

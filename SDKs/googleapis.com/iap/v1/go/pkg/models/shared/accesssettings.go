package shared

type AccessSettings struct {
	AllowedDomainsSettings   *AllowedDomainsSettings   `json:"allowedDomainsSettings"`
	CorsSettings             *CorsSettings             `json:"corsSettings"`
	GcipSettings             *GcipSettings             `json:"gcipSettings"`
	OauthSettings            *OAuthSettings            `json:"oauthSettings"`
	PolicyDelegationSettings *PolicyDelegationSettings `json:"policyDelegationSettings"`
	ReauthSettings           *ReauthSettings           `json:"reauthSettings"`
}

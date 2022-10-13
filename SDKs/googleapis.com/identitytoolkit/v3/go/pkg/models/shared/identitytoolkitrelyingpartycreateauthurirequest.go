package shared

type IdentitytoolkitRelyingpartyCreateAuthURIRequest struct {
	AppID               *string           `json:"appId"`
	AuthFlowType        *string           `json:"authFlowType"`
	ClientID            *string           `json:"clientId"`
	Context             *string           `json:"context"`
	ContinueURI         *string           `json:"continueUri"`
	CustomParameter     map[string]string `json:"customParameter"`
	HostedDomain        *string           `json:"hostedDomain"`
	Identifier          *string           `json:"identifier"`
	OauthConsumerKey    *string           `json:"oauthConsumerKey"`
	OauthScope          *string           `json:"oauthScope"`
	OpenidRealm         *string           `json:"openidRealm"`
	OtaApp              *string           `json:"otaApp"`
	ProviderID          *string           `json:"providerId"`
	SessionID           *string           `json:"sessionId"`
	TenantID            *string           `json:"tenantId"`
	TenantProjectNumber *string           `json:"tenantProjectNumber"`
}

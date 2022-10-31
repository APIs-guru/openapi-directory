package shared



type IdentitytoolkitRelyingpartyCreateAuthURIRequest struct {
    AppID *string `json:"appId,omitempty"`
    AuthFlowType *string `json:"authFlowType,omitempty"`
    ClientID *string `json:"clientId,omitempty"`
    Context *string `json:"context,omitempty"`
    ContinueURI *string `json:"continueUri,omitempty"`
    CustomParameter map[string]string `json:"customParameter,omitempty"`
    HostedDomain *string `json:"hostedDomain,omitempty"`
    Identifier *string `json:"identifier,omitempty"`
    OauthConsumerKey *string `json:"oauthConsumerKey,omitempty"`
    OauthScope *string `json:"oauthScope,omitempty"`
    OpenidRealm *string `json:"openidRealm,omitempty"`
    OtaApp *string `json:"otaApp,omitempty"`
    ProviderID *string `json:"providerId,omitempty"`
    SessionID *string `json:"sessionId,omitempty"`
    TenantID *string `json:"tenantId,omitempty"`
    TenantProjectNumber *string `json:"tenantProjectNumber,omitempty"`
    
}


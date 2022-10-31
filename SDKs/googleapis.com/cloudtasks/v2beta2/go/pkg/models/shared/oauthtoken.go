package shared



type OAuthToken struct {
    Scope *string `json:"scope,omitempty"`
    ServiceAccountEmail *string `json:"serviceAccountEmail,omitempty"`
    
}


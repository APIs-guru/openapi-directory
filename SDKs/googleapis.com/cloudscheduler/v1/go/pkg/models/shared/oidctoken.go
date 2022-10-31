package shared



type OidcToken struct {
    Audience *string `json:"audience,omitempty"`
    ServiceAccountEmail *string `json:"serviceAccountEmail,omitempty"`
    
}


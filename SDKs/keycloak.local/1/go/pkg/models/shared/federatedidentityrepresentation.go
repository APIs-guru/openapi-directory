package shared



type FederatedIdentityRepresentation struct {
    IdentityProvider *string `json:"identityProvider,omitempty"`
    UserID *string `json:"userId,omitempty"`
    UserName *string `json:"userName,omitempty"`
    
}


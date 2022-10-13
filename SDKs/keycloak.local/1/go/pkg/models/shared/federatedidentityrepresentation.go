package shared

type FederatedIdentityRepresentation struct {
	IdentityProvider *string `json:"identityProvider"`
	UserID           *string `json:"userId"`
	UserName         *string `json:"userName"`
}

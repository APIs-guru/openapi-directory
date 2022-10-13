package shared

type UserRepresentation struct {
	Access                     map[string]interface{}            `json:"access"`
	Attributes                 map[string]interface{}            `json:"attributes"`
	ClientConsents             []UserConsentRepresentation       `json:"clientConsents"`
	ClientRoles                map[string]interface{}            `json:"clientRoles"`
	CreatedTimestamp           *int64                            `json:"createdTimestamp"`
	Credentials                []CredentialRepresentation        `json:"credentials"`
	DisableableCredentialTypes []string                          `json:"disableableCredentialTypes"`
	Email                      *string                           `json:"email"`
	EmailVerified              *bool                             `json:"emailVerified"`
	Enabled                    *bool                             `json:"enabled"`
	FederatedIdentities        []FederatedIdentityRepresentation `json:"federatedIdentities"`
	FederationLink             *string                           `json:"federationLink"`
	FirstName                  *string                           `json:"firstName"`
	Groups                     []string                          `json:"groups"`
	ID                         *string                           `json:"id"`
	LastName                   *string                           `json:"lastName"`
	NotBefore                  *int32                            `json:"notBefore"`
	Origin                     *string                           `json:"origin"`
	RealmRoles                 []string                          `json:"realmRoles"`
	RequiredActions            []string                          `json:"requiredActions"`
	Self                       *string                           `json:"self"`
	ServiceAccountClientID     *string                           `json:"serviceAccountClientId"`
	Username                   *string                           `json:"username"`
}

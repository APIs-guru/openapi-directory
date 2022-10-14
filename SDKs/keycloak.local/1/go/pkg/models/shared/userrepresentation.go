package shared

type UserRepresentation struct {
	Access                     map[string]interface{}            `json:"access,omitempty"`
	Attributes                 map[string]interface{}            `json:"attributes,omitempty"`
	ClientConsents             []UserConsentRepresentation       `json:"clientConsents,omitempty"`
	ClientRoles                map[string]interface{}            `json:"clientRoles,omitempty"`
	CreatedTimestamp           *int64                            `json:"createdTimestamp,omitempty"`
	Credentials                []CredentialRepresentation        `json:"credentials,omitempty"`
	DisableableCredentialTypes []string                          `json:"disableableCredentialTypes,omitempty"`
	Email                      *string                           `json:"email,omitempty"`
	EmailVerified              *bool                             `json:"emailVerified,omitempty"`
	Enabled                    *bool                             `json:"enabled,omitempty"`
	FederatedIdentities        []FederatedIdentityRepresentation `json:"federatedIdentities,omitempty"`
	FederationLink             *string                           `json:"federationLink,omitempty"`
	FirstName                  *string                           `json:"firstName,omitempty"`
	Groups                     []string                          `json:"groups,omitempty"`
	ID                         *string                           `json:"id,omitempty"`
	LastName                   *string                           `json:"lastName,omitempty"`
	NotBefore                  *int32                            `json:"notBefore,omitempty"`
	Origin                     *string                           `json:"origin,omitempty"`
	RealmRoles                 []string                          `json:"realmRoles,omitempty"`
	RequiredActions            []string                          `json:"requiredActions,omitempty"`
	Self                       *string                           `json:"self,omitempty"`
	ServiceAccountClientID     *string                           `json:"serviceAccountClientId,omitempty"`
	Username                   *string                           `json:"username,omitempty"`
}

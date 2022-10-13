package shared

type IdentityProviderMapperRepresentation struct {
	Config                 map[string]interface{} `json:"config"`
	ID                     *string                `json:"id"`
	IdentityProviderAlias  *string                `json:"identityProviderAlias"`
	IdentityProviderMapper *string                `json:"identityProviderMapper"`
	Name                   *string                `json:"name"`
}

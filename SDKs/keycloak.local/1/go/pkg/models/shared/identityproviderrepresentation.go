package shared

type IdentityProviderRepresentation struct {
	AddReadTokenRoleOnCreate  *bool                  `json:"addReadTokenRoleOnCreate"`
	Alias                     *string                `json:"alias"`
	Config                    map[string]interface{} `json:"config"`
	DisplayName               *string                `json:"displayName"`
	Enabled                   *bool                  `json:"enabled"`
	FirstBrokerLoginFlowAlias *string                `json:"firstBrokerLoginFlowAlias"`
	InternalID                *string                `json:"internalId"`
	LinkOnly                  *bool                  `json:"linkOnly"`
	PostBrokerLoginFlowAlias  *string                `json:"postBrokerLoginFlowAlias"`
	ProviderID                *string                `json:"providerId"`
	StoreToken                *bool                  `json:"storeToken"`
	TrustEmail                *bool                  `json:"trustEmail"`
}

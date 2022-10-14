package shared

type IdentityProviderRepresentation struct {
	AddReadTokenRoleOnCreate  *bool                  `json:"addReadTokenRoleOnCreate,omitempty"`
	Alias                     *string                `json:"alias,omitempty"`
	Config                    map[string]interface{} `json:"config,omitempty"`
	DisplayName               *string                `json:"displayName,omitempty"`
	Enabled                   *bool                  `json:"enabled,omitempty"`
	FirstBrokerLoginFlowAlias *string                `json:"firstBrokerLoginFlowAlias,omitempty"`
	InternalID                *string                `json:"internalId,omitempty"`
	LinkOnly                  *bool                  `json:"linkOnly,omitempty"`
	PostBrokerLoginFlowAlias  *string                `json:"postBrokerLoginFlowAlias,omitempty"`
	ProviderID                *string                `json:"providerId,omitempty"`
	StoreToken                *bool                  `json:"storeToken,omitempty"`
	TrustEmail                *bool                  `json:"trustEmail,omitempty"`
}

package shared

type UserFederationMapperRepresentation struct {
	Config                        map[string]interface{} `json:"config"`
	FederationMapperType          *string                `json:"federationMapperType"`
	FederationProviderDisplayName *string                `json:"federationProviderDisplayName"`
	ID                            *string                `json:"id"`
	Name                          *string                `json:"name"`
}

package shared

type ComponentRepresentation struct {
	Config       *MultivaluedHashMap `json:"config"`
	ID           *string             `json:"id"`
	Name         *string             `json:"name"`
	ParentID     *string             `json:"parentId"`
	ProviderID   *string             `json:"providerId"`
	ProviderType *string             `json:"providerType"`
	SubType      *string             `json:"subType"`
}

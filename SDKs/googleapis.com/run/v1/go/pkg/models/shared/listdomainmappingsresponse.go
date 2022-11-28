package shared

// ListDomainMappingsResponse
// ListDomainMappingsResponse is a list of DomainMapping resources.
type ListDomainMappingsResponse struct {
	APIVersion  *string         `json:"apiVersion,omitempty"`
	Items       []DomainMapping `json:"items,omitempty"`
	Kind        *string         `json:"kind,omitempty"`
	Metadata    *ListMeta       `json:"metadata,omitempty"`
	Unreachable []string        `json:"unreachable,omitempty"`
}

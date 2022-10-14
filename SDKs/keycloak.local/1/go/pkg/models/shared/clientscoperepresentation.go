package shared

type ClientScopeRepresentation struct {
	Attributes      map[string]interface{}         `json:"attributes,omitempty"`
	Description     *string                        `json:"description,omitempty"`
	ID              *string                        `json:"id,omitempty"`
	Name            *string                        `json:"name,omitempty"`
	Protocol        *string                        `json:"protocol,omitempty"`
	ProtocolMappers []ProtocolMapperRepresentation `json:"protocolMappers,omitempty"`
}

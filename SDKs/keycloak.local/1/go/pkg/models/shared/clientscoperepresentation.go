package shared

type ClientScopeRepresentation struct {
	Attributes      map[string]interface{}         `json:"attributes"`
	Description     *string                        `json:"description"`
	ID              *string                        `json:"id"`
	Name            *string                        `json:"name"`
	Protocol        *string                        `json:"protocol"`
	ProtocolMappers []ProtocolMapperRepresentation `json:"protocolMappers"`
}

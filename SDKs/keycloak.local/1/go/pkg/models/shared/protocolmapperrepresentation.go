package shared

type ProtocolMapperRepresentation struct {
	Config         map[string]interface{} `json:"config"`
	ID             *string                `json:"id"`
	Name           *string                `json:"name"`
	Protocol       *string                `json:"protocol"`
	ProtocolMapper *string                `json:"protocolMapper"`
}

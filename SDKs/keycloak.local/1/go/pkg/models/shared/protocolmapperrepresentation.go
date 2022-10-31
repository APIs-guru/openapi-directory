package shared



type ProtocolMapperRepresentation struct {
    Config map[string]interface{} `json:"config,omitempty"`
    ID *string `json:"id,omitempty"`
    Name *string `json:"name,omitempty"`
    Protocol *string `json:"protocol,omitempty"`
    ProtocolMapper *string `json:"protocolMapper,omitempty"`
    
}


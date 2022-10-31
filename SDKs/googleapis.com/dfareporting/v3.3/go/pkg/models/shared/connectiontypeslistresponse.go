package shared



type ConnectionTypesListResponse struct {
    ConnectionTypes []ConnectionType `json:"connectionTypes,omitempty"`
    Kind *string `json:"kind,omitempty"`
    
}


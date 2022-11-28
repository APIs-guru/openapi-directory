package shared

// ConnectionTypesListResponse
// Connection Type List Response
type ConnectionTypesListResponse struct {
	ConnectionTypes []ConnectionType `json:"connectionTypes,omitempty"`
	Kind            *string          `json:"kind,omitempty"`
}

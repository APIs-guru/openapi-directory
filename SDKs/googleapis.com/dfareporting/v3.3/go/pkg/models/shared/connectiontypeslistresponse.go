package shared

type ConnectionTypesListResponse struct {
	ConnectionTypes []ConnectionType `json:"connectionTypes"`
	Kind            *string          `json:"kind"`
}

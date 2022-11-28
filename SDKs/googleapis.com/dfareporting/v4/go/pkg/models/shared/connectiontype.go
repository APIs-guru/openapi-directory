package shared

// ConnectionType
// Contains information about an internet connection type that can be targeted by ads. Clients can use the connection type to target mobile vs. broadband users.
type ConnectionType struct {
	ID   *string `json:"id,omitempty"`
	Kind *string `json:"kind,omitempty"`
	Name *string `json:"name,omitempty"`
}

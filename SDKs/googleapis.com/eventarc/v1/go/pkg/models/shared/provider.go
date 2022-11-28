package shared

// Provider
// A representation of the Provider resource.
type Provider struct {
	DisplayName *string     `json:"displayName,omitempty"`
	EventTypes  []EventType `json:"eventTypes,omitempty"`
	Name        *string     `json:"name,omitempty"`
}

package shared

type Provider struct {
	DisplayName *string     `json:"displayName"`
	EventTypes  []EventType `json:"eventTypes"`
	Name        *string     `json:"name"`
}

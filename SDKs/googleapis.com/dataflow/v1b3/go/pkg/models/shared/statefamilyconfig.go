package shared

// StateFamilyConfig
// State family configuration.
type StateFamilyConfig struct {
	IsRead      *bool   `json:"isRead,omitempty"`
	StateFamily *string `json:"stateFamily,omitempty"`
}

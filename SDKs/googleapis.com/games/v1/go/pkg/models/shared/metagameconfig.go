package shared

// MetagameConfig
// The metagame config resource
type MetagameConfig struct {
	CurrentVersion *int32        `json:"currentVersion,omitempty"`
	Kind           *string       `json:"kind,omitempty"`
	PlayerLevels   []PlayerLevel `json:"playerLevels,omitempty"`
}

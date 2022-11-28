package shared

// ScopedPlayerIds
// Scoped player identifiers.
type ScopedPlayerIds struct {
	DeveloperPlayerKey *string `json:"developerPlayerKey,omitempty"`
	GamePlayerID       *string `json:"gamePlayerId,omitempty"`
}

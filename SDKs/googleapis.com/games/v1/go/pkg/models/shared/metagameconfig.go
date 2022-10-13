package shared

type MetagameConfig struct {
	CurrentVersion *int32        `json:"currentVersion"`
	Kind           *string       `json:"kind"`
	PlayerLevels   []PlayerLevel `json:"playerLevels"`
}

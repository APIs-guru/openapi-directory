package shared

// GamesPlayerLevelResource
// 1P/3P metadata about a user's level.
type GamesPlayerLevelResource struct {
	Level               *int32  `json:"level,omitempty"`
	MaxExperiencePoints *string `json:"maxExperiencePoints,omitempty"`
	MinExperiencePoints *string `json:"minExperiencePoints,omitempty"`
}

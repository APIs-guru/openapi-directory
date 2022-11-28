package shared

// GamesPlayerExperienceInfoResource
// 1P/3P metadata about the player's experience.
type GamesPlayerExperienceInfoResource struct {
	CurrentExperiencePoints    *string                   `json:"currentExperiencePoints,omitempty"`
	CurrentLevel               *GamesPlayerLevelResource `json:"currentLevel,omitempty"`
	LastLevelUpTimestampMillis *string                   `json:"lastLevelUpTimestampMillis,omitempty"`
	NextLevel                  *GamesPlayerLevelResource `json:"nextLevel,omitempty"`
}

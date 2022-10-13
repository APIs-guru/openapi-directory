package shared

type GamesPlayerExperienceInfoResource struct {
	CurrentExperiencePoints    *string                   `json:"currentExperiencePoints"`
	CurrentLevel               *GamesPlayerLevelResource `json:"currentLevel"`
	LastLevelUpTimestampMillis *string                   `json:"lastLevelUpTimestampMillis"`
	NextLevel                  *GamesPlayerLevelResource `json:"nextLevel"`
}

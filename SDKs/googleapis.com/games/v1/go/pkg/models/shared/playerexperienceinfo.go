package shared

type PlayerExperienceInfo struct {
	CurrentExperiencePoints    *string      `json:"currentExperiencePoints"`
	CurrentLevel               *PlayerLevel `json:"currentLevel"`
	Kind                       *string      `json:"kind"`
	LastLevelUpTimestampMillis *string      `json:"lastLevelUpTimestampMillis"`
	NextLevel                  *PlayerLevel `json:"nextLevel"`
}

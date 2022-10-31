package shared

type PlayerExperienceInfo struct {
	CurrentExperiencePoints    *string      `json:"currentExperiencePoints,omitempty"`
	CurrentLevel               *PlayerLevel `json:"currentLevel,omitempty"`
	Kind                       *string      `json:"kind,omitempty"`
	LastLevelUpTimestampMillis *string      `json:"lastLevelUpTimestampMillis,omitempty"`
	NextLevel                  *PlayerLevel `json:"nextLevel,omitempty"`
}

package shared




type PlayerAchievementAchievementStateEnum string

const (
    PlayerAchievementAchievementStateEnumStateUnspecified PlayerAchievementAchievementStateEnum = "STATE_UNSPECIFIED"
PlayerAchievementAchievementStateEnumHidden PlayerAchievementAchievementStateEnum = "HIDDEN"
PlayerAchievementAchievementStateEnumRevealed PlayerAchievementAchievementStateEnum = "REVEALED"
PlayerAchievementAchievementStateEnumUnlocked PlayerAchievementAchievementStateEnum = "UNLOCKED"
)


type PlayerAchievement struct {
    AchievementState *PlayerAchievementAchievementStateEnum `json:"achievementState,omitempty"`
    CurrentSteps *int32 `json:"currentSteps,omitempty"`
    ExperiencePoints *string `json:"experiencePoints,omitempty"`
    FormattedCurrentStepsString *string `json:"formattedCurrentStepsString,omitempty"`
    ID *string `json:"id,omitempty"`
    Kind *string `json:"kind,omitempty"`
    LastUpdatedTimestamp *string `json:"lastUpdatedTimestamp,omitempty"`
    
}


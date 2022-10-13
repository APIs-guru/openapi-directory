package shared

type PlayerAchievementAchievementStateEnum string

const (
	PlayerAchievementAchievementStateEnumStateUnspecified PlayerAchievementAchievementStateEnum = "STATE_UNSPECIFIED"
	PlayerAchievementAchievementStateEnumHidden           PlayerAchievementAchievementStateEnum = "HIDDEN"
	PlayerAchievementAchievementStateEnumRevealed         PlayerAchievementAchievementStateEnum = "REVEALED"
	PlayerAchievementAchievementStateEnumUnlocked         PlayerAchievementAchievementStateEnum = "UNLOCKED"
)

type PlayerAchievement struct {
	AchievementState            *PlayerAchievementAchievementStateEnum `json:"achievementState"`
	CurrentSteps                *int32                                 `json:"currentSteps"`
	ExperiencePoints            *string                                `json:"experiencePoints"`
	FormattedCurrentStepsString *string                                `json:"formattedCurrentStepsString"`
	ID                          *string                                `json:"id"`
	Kind                        *string                                `json:"kind"`
	LastUpdatedTimestamp        *string                                `json:"lastUpdatedTimestamp"`
}

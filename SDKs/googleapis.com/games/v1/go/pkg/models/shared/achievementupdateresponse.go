package shared

type AchievementUpdateResponseCurrentStateEnum string

const (
	AchievementUpdateResponseCurrentStateEnumUpdatedAchievementStateUnspecified AchievementUpdateResponseCurrentStateEnum = "UPDATED_ACHIEVEMENT_STATE_UNSPECIFIED"
	AchievementUpdateResponseCurrentStateEnumHidden                             AchievementUpdateResponseCurrentStateEnum = "HIDDEN"
	AchievementUpdateResponseCurrentStateEnumRevealed                           AchievementUpdateResponseCurrentStateEnum = "REVEALED"
	AchievementUpdateResponseCurrentStateEnumUnlocked                           AchievementUpdateResponseCurrentStateEnum = "UNLOCKED"
)

type AchievementUpdateResponse struct {
	AchievementID  *string                                    `json:"achievementId"`
	CurrentState   *AchievementUpdateResponseCurrentStateEnum `json:"currentState"`
	CurrentSteps   *int32                                     `json:"currentSteps"`
	Kind           *string                                    `json:"kind"`
	NewlyUnlocked  *bool                                      `json:"newlyUnlocked"`
	UpdateOccurred *bool                                      `json:"updateOccurred"`
}

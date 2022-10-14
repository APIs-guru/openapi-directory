package shared

type AchievementUpdateResponseCurrentStateEnum string

const (
	AchievementUpdateResponseCurrentStateEnumUpdatedAchievementStateUnspecified AchievementUpdateResponseCurrentStateEnum = "UPDATED_ACHIEVEMENT_STATE_UNSPECIFIED"
	AchievementUpdateResponseCurrentStateEnumHidden                             AchievementUpdateResponseCurrentStateEnum = "HIDDEN"
	AchievementUpdateResponseCurrentStateEnumRevealed                           AchievementUpdateResponseCurrentStateEnum = "REVEALED"
	AchievementUpdateResponseCurrentStateEnumUnlocked                           AchievementUpdateResponseCurrentStateEnum = "UNLOCKED"
)

type AchievementUpdateResponse struct {
	AchievementID  *string                                    `json:"achievementId,omitempty"`
	CurrentState   *AchievementUpdateResponseCurrentStateEnum `json:"currentState,omitempty"`
	CurrentSteps   *int32                                     `json:"currentSteps,omitempty"`
	Kind           *string                                    `json:"kind,omitempty"`
	NewlyUnlocked  *bool                                      `json:"newlyUnlocked,omitempty"`
	UpdateOccurred *bool                                      `json:"updateOccurred,omitempty"`
}

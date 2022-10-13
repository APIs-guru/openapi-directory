package shared

type AchievementUpdateRequestUpdateTypeEnum string

const (
	AchievementUpdateRequestUpdateTypeEnumAchievementUpdateTypeUnspecified AchievementUpdateRequestUpdateTypeEnum = "ACHIEVEMENT_UPDATE_TYPE_UNSPECIFIED"
	AchievementUpdateRequestUpdateTypeEnumReveal                           AchievementUpdateRequestUpdateTypeEnum = "REVEAL"
	AchievementUpdateRequestUpdateTypeEnumUnlock                           AchievementUpdateRequestUpdateTypeEnum = "UNLOCK"
	AchievementUpdateRequestUpdateTypeEnumIncrement                        AchievementUpdateRequestUpdateTypeEnum = "INCREMENT"
	AchievementUpdateRequestUpdateTypeEnumSetStepsAtLeast                  AchievementUpdateRequestUpdateTypeEnum = "SET_STEPS_AT_LEAST"
)

type AchievementUpdateRequest struct {
	AchievementID          *string                                 `json:"achievementId"`
	IncrementPayload       *GamesAchievementIncrement              `json:"incrementPayload"`
	Kind                   *string                                 `json:"kind"`
	SetStepsAtLeastPayload *GamesAchievementSetStepsAtLeast        `json:"setStepsAtLeastPayload"`
	UpdateType             *AchievementUpdateRequestUpdateTypeEnum `json:"updateType"`
}

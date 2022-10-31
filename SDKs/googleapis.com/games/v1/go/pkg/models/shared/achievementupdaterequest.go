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
	AchievementID          *string                                 `json:"achievementId,omitempty"`
	IncrementPayload       *GamesAchievementIncrement              `json:"incrementPayload,omitempty"`
	Kind                   *string                                 `json:"kind,omitempty"`
	SetStepsAtLeastPayload *GamesAchievementSetStepsAtLeast        `json:"setStepsAtLeastPayload,omitempty"`
	UpdateType             *AchievementUpdateRequestUpdateTypeEnum `json:"updateType,omitempty"`
}

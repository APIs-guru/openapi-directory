package shared

type AchievementConfigurationAchievementTypeEnum string

const (
	AchievementConfigurationAchievementTypeEnumAchievementTypeUnspecified AchievementConfigurationAchievementTypeEnum = "ACHIEVEMENT_TYPE_UNSPECIFIED"
	AchievementConfigurationAchievementTypeEnumStandard                   AchievementConfigurationAchievementTypeEnum = "STANDARD"
	AchievementConfigurationAchievementTypeEnumIncremental                AchievementConfigurationAchievementTypeEnum = "INCREMENTAL"
)

type AchievementConfigurationInitialStateEnum string

const (
	AchievementConfigurationInitialStateEnumInitialStateUnspecified AchievementConfigurationInitialStateEnum = "INITIAL_STATE_UNSPECIFIED"
	AchievementConfigurationInitialStateEnumHidden                  AchievementConfigurationInitialStateEnum = "HIDDEN"
	AchievementConfigurationInitialStateEnumRevealed                AchievementConfigurationInitialStateEnum = "REVEALED"
)

type AchievementConfiguration struct {
	AchievementType *AchievementConfigurationAchievementTypeEnum `json:"achievementType"`
	Draft           *AchievementConfigurationDetail              `json:"draft"`
	ID              *string                                      `json:"id"`
	InitialState    *AchievementConfigurationInitialStateEnum    `json:"initialState"`
	Kind            *string                                      `json:"kind"`
	Published       *AchievementConfigurationDetail              `json:"published"`
	StepsToUnlock   *int32                                       `json:"stepsToUnlock"`
	Token           *string                                      `json:"token"`
}

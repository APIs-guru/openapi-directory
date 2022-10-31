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
	AchievementType *AchievementConfigurationAchievementTypeEnum `json:"achievementType,omitempty"`
	Draft           *AchievementConfigurationDetail              `json:"draft,omitempty"`
	ID              *string                                      `json:"id,omitempty"`
	InitialState    *AchievementConfigurationInitialStateEnum    `json:"initialState,omitempty"`
	Kind            *string                                      `json:"kind,omitempty"`
	Published       *AchievementConfigurationDetail              `json:"published,omitempty"`
	StepsToUnlock   *int32                                       `json:"stepsToUnlock,omitempty"`
	Token           *string                                      `json:"token,omitempty"`
}

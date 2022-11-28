package shared

type AchievementDefinitionAchievementTypeEnum string

const (
	AchievementDefinitionAchievementTypeEnumAchievementTypeUnspecified AchievementDefinitionAchievementTypeEnum = "ACHIEVEMENT_TYPE_UNSPECIFIED"
	AchievementDefinitionAchievementTypeEnumStandard                   AchievementDefinitionAchievementTypeEnum = "STANDARD"
	AchievementDefinitionAchievementTypeEnumIncremental                AchievementDefinitionAchievementTypeEnum = "INCREMENTAL"
)

type AchievementDefinitionInitialStateEnum string

const (
	AchievementDefinitionInitialStateEnumInitialAchievementStateUnspecified AchievementDefinitionInitialStateEnum = "INITIAL_ACHIEVEMENT_STATE_UNSPECIFIED"
	AchievementDefinitionInitialStateEnumHidden                             AchievementDefinitionInitialStateEnum = "HIDDEN"
	AchievementDefinitionInitialStateEnumRevealed                           AchievementDefinitionInitialStateEnum = "REVEALED"
	AchievementDefinitionInitialStateEnumUnlocked                           AchievementDefinitionInitialStateEnum = "UNLOCKED"
)

// AchievementDefinition
// An achievement definition object.
type AchievementDefinition struct {
	AchievementType          *AchievementDefinitionAchievementTypeEnum `json:"achievementType,omitempty"`
	Description              *string                                   `json:"description,omitempty"`
	ExperiencePoints         *string                                   `json:"experiencePoints,omitempty"`
	FormattedTotalSteps      *string                                   `json:"formattedTotalSteps,omitempty"`
	ID                       *string                                   `json:"id,omitempty"`
	InitialState             *AchievementDefinitionInitialStateEnum    `json:"initialState,omitempty"`
	IsRevealedIconURLDefault *bool                                     `json:"isRevealedIconUrlDefault,omitempty"`
	IsUnlockedIconURLDefault *bool                                     `json:"isUnlockedIconUrlDefault,omitempty"`
	Kind                     *string                                   `json:"kind,omitempty"`
	Name                     *string                                   `json:"name,omitempty"`
	RevealedIconURL          *string                                   `json:"revealedIconUrl,omitempty"`
	TotalSteps               *int32                                    `json:"totalSteps,omitempty"`
	UnlockedIconURL          *string                                   `json:"unlockedIconUrl,omitempty"`
}

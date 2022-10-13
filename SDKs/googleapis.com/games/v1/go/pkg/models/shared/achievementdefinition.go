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

type AchievementDefinition struct {
	AchievementType          *AchievementDefinitionAchievementTypeEnum `json:"achievementType"`
	Description              *string                                   `json:"description"`
	ExperiencePoints         *string                                   `json:"experiencePoints"`
	FormattedTotalSteps      *string                                   `json:"formattedTotalSteps"`
	ID                       *string                                   `json:"id"`
	InitialState             *AchievementDefinitionInitialStateEnum    `json:"initialState"`
	IsRevealedIconURLDefault *bool                                     `json:"isRevealedIconUrlDefault"`
	IsUnlockedIconURLDefault *bool                                     `json:"isUnlockedIconUrlDefault"`
	Kind                     *string                                   `json:"kind"`
	Name                     *string                                   `json:"name"`
	RevealedIconURL          *string                                   `json:"revealedIconUrl"`
	TotalSteps               *int32                                    `json:"totalSteps"`
	UnlockedIconURL          *string                                   `json:"unlockedIconUrl"`
}

package shared

type ApplicationEnabledFeaturesEnum string

const (
	ApplicationEnabledFeaturesEnumApplicationFeatureUnspecified ApplicationEnabledFeaturesEnum = "APPLICATION_FEATURE_UNSPECIFIED"
	ApplicationEnabledFeaturesEnumSnapshots                     ApplicationEnabledFeaturesEnum = "SNAPSHOTS"
)

type Application struct {
	AchievementCount     *int32                           `json:"achievement_count"`
	Assets               []ImageAsset                     `json:"assets"`
	Author               *string                          `json:"author"`
	Category             *ApplicationCategory             `json:"category"`
	Description          *string                          `json:"description"`
	EnabledFeatures      []ApplicationEnabledFeaturesEnum `json:"enabledFeatures"`
	ID                   *string                          `json:"id"`
	Instances            []Instance                       `json:"instances"`
	Kind                 *string                          `json:"kind"`
	LastUpdatedTimestamp *string                          `json:"lastUpdatedTimestamp"`
	LeaderboardCount     *int32                           `json:"leaderboard_count"`
	Name                 *string                          `json:"name"`
	ThemeColor           *string                          `json:"themeColor"`
}

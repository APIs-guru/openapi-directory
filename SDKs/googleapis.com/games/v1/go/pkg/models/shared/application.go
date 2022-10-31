package shared




type ApplicationEnabledFeaturesEnum string

const (
    ApplicationEnabledFeaturesEnumApplicationFeatureUnspecified ApplicationEnabledFeaturesEnum = "APPLICATION_FEATURE_UNSPECIFIED"
ApplicationEnabledFeaturesEnumSnapshots ApplicationEnabledFeaturesEnum = "SNAPSHOTS"
)


type Application struct {
    AchievementCount *int32 `json:"achievement_count,omitempty"`
    Assets []ImageAsset `json:"assets,omitempty"`
    Author *string `json:"author,omitempty"`
    Category *ApplicationCategory `json:"category,omitempty"`
    Description *string `json:"description,omitempty"`
    EnabledFeatures []ApplicationEnabledFeaturesEnum `json:"enabledFeatures,omitempty"`
    ID *string `json:"id,omitempty"`
    Instances []Instance `json:"instances,omitempty"`
    Kind *string `json:"kind,omitempty"`
    LastUpdatedTimestamp *string `json:"lastUpdatedTimestamp,omitempty"`
    LeaderboardCount *int32 `json:"leaderboard_count,omitempty"`
    Name *string `json:"name,omitempty"`
    ThemeColor *string `json:"themeColor,omitempty"`
    
}


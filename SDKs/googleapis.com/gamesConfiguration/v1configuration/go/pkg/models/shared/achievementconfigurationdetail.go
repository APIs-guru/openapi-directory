package shared

// AchievementConfigurationDetail
// An achievement configuration detail.
type AchievementConfigurationDetail struct {
	Description *LocalizedStringBundle `json:"description,omitempty"`
	IconURL     *string                `json:"iconUrl,omitempty"`
	Kind        *string                `json:"kind,omitempty"`
	Name        *LocalizedStringBundle `json:"name,omitempty"`
	PointValue  *int32                 `json:"pointValue,omitempty"`
	SortRank    *int32                 `json:"sortRank,omitempty"`
}

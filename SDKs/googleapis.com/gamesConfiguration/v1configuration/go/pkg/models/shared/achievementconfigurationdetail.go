package shared

type AchievementConfigurationDetail struct {
	Description *LocalizedStringBundle `json:"description"`
	IconURL     *string                `json:"iconUrl"`
	Kind        *string                `json:"kind"`
	Name        *LocalizedStringBundle `json:"name"`
	PointValue  *int32                 `json:"pointValue"`
	SortRank    *int32                 `json:"sortRank"`
}

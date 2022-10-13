package shared

type LeaderboardConfigurationDetail struct {
	IconURL     *string                         `json:"iconUrl"`
	Kind        *string                         `json:"kind"`
	Name        *LocalizedStringBundle          `json:"name"`
	ScoreFormat *GamesNumberFormatConfiguration `json:"scoreFormat"`
	SortRank    *int32                          `json:"sortRank"`
}

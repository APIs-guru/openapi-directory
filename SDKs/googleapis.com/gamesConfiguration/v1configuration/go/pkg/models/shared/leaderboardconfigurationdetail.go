package shared

type LeaderboardConfigurationDetail struct {
	IconURL     *string                         `json:"iconUrl,omitempty"`
	Kind        *string                         `json:"kind,omitempty"`
	Name        *LocalizedStringBundle          `json:"name,omitempty"`
	ScoreFormat *GamesNumberFormatConfiguration `json:"scoreFormat,omitempty"`
	SortRank    *int32                          `json:"sortRank,omitempty"`
}

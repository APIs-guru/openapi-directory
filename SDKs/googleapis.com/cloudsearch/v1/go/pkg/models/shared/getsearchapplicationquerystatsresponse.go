package shared

type GetSearchApplicationQueryStatsResponse struct {
	Stats           []SearchApplicationQueryStats `json:"stats,omitempty"`
	TotalQueryCount *string                       `json:"totalQueryCount,omitempty"`
}

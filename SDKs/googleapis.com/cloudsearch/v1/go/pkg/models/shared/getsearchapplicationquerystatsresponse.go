package shared

// GetSearchApplicationQueryStatsResponse
// Response format for getting query stats for a search application between given dates.
type GetSearchApplicationQueryStatsResponse struct {
	Stats           []SearchApplicationQueryStats `json:"stats,omitempty"`
	TotalQueryCount *string                       `json:"totalQueryCount,omitempty"`
}

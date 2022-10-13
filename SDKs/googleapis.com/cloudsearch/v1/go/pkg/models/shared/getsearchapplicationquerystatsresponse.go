package shared

type GetSearchApplicationQueryStatsResponse struct {
	Stats           []SearchApplicationQueryStats `json:"stats"`
	TotalQueryCount *string                       `json:"totalQueryCount"`
}

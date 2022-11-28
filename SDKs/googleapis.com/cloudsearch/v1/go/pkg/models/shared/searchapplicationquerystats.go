package shared

// SearchApplicationQueryStats
// Search application level query stats per date
type SearchApplicationQueryStats struct {
	Date               *Date                `json:"date,omitempty"`
	QueryCountByStatus []QueryCountByStatus `json:"queryCountByStatus,omitempty"`
}

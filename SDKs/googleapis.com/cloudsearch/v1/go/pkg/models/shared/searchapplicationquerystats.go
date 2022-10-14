package shared

type SearchApplicationQueryStats struct {
	Date               *Date                `json:"date,omitempty"`
	QueryCountByStatus []QueryCountByStatus `json:"queryCountByStatus,omitempty"`
}

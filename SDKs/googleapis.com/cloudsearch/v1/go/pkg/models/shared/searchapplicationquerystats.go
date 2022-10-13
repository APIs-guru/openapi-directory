package shared

type SearchApplicationQueryStats struct {
	Date               *Date                `json:"date"`
	QueryCountByStatus []QueryCountByStatus `json:"queryCountByStatus"`
}

package shared

type CustomerQueryStats struct {
	Date               *Date                `json:"date"`
	QueryCountByStatus []QueryCountByStatus `json:"queryCountByStatus"`
}

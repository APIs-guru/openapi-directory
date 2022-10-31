package shared

type CustomerQueryStats struct {
	Date               *Date                `json:"date,omitempty"`
	QueryCountByStatus []QueryCountByStatus `json:"queryCountByStatus,omitempty"`
}

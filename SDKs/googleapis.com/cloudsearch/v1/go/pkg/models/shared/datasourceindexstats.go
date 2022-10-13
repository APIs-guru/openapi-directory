package shared

type DataSourceIndexStats struct {
	Date              *Date               `json:"date"`
	ItemCountByStatus []ItemCountByStatus `json:"itemCountByStatus"`
}

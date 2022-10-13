package shared

type CustomerIndexStats struct {
	Date              *Date               `json:"date"`
	ItemCountByStatus []ItemCountByStatus `json:"itemCountByStatus"`
}

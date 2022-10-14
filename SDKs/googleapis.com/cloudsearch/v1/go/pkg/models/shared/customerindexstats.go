package shared

type CustomerIndexStats struct {
	Date              *Date               `json:"date,omitempty"`
	ItemCountByStatus []ItemCountByStatus `json:"itemCountByStatus,omitempty"`
}

package shared

// CustomerIndexStats
// Aggregation of items by status code as of the specified date.
type CustomerIndexStats struct {
	Date              *Date               `json:"date,omitempty"`
	ItemCountByStatus []ItemCountByStatus `json:"itemCountByStatus,omitempty"`
}

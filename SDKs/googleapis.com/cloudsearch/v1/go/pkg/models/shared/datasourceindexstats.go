package shared

// DataSourceIndexStats
// Aggregation of items by status code as of the specified date.
type DataSourceIndexStats struct {
	Date              *Date               `json:"date,omitempty"`
	ItemCountByStatus []ItemCountByStatus `json:"itemCountByStatus,omitempty"`
}

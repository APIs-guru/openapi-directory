package shared

// GetCustomerSearchApplicationStatsResponse
// Response format for search application stats for a customer.
type GetCustomerSearchApplicationStatsResponse struct {
	AverageSearchApplicationCount *string                          `json:"averageSearchApplicationCount,omitempty"`
	Stats                         []CustomerSearchApplicationStats `json:"stats,omitempty"`
}

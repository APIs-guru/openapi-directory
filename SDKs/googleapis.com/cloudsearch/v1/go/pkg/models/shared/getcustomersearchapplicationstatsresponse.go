package shared

type GetCustomerSearchApplicationStatsResponse struct {
	AverageSearchApplicationCount *string                          `json:"averageSearchApplicationCount,omitempty"`
	Stats                         []CustomerSearchApplicationStats `json:"stats,omitempty"`
}

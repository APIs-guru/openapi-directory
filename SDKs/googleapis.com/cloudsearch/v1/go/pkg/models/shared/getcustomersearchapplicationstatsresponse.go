package shared

type GetCustomerSearchApplicationStatsResponse struct {
	AverageSearchApplicationCount *string                          `json:"averageSearchApplicationCount"`
	Stats                         []CustomerSearchApplicationStats `json:"stats"`
}

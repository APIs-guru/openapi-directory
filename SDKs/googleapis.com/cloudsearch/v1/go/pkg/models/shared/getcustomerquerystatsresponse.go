package shared

type GetCustomerQueryStatsResponse struct {
	Stats           []CustomerQueryStats `json:"stats,omitempty"`
	TotalQueryCount *string              `json:"totalQueryCount,omitempty"`
}

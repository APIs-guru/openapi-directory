package shared

type GetCustomerQueryStatsResponse struct {
	Stats           []CustomerQueryStats `json:"stats"`
	TotalQueryCount *string              `json:"totalQueryCount"`
}

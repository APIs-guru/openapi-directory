package shared

type GetCustomerIndexStatsResponse struct {
	AverageIndexedItemCount *string              `json:"averageIndexedItemCount"`
	Stats                   []CustomerIndexStats `json:"stats"`
}

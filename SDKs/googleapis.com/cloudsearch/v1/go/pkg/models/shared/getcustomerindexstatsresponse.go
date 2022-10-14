package shared

type GetCustomerIndexStatsResponse struct {
	AverageIndexedItemCount *string              `json:"averageIndexedItemCount,omitempty"`
	Stats                   []CustomerIndexStats `json:"stats,omitempty"`
}

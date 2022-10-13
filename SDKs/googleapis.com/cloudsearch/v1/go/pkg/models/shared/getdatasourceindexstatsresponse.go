package shared

type GetDataSourceIndexStatsResponse struct {
	AverageIndexedItemCount *string                `json:"averageIndexedItemCount"`
	Stats                   []DataSourceIndexStats `json:"stats"`
}

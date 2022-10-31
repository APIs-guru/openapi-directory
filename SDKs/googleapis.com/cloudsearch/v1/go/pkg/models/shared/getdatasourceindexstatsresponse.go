package shared



type GetDataSourceIndexStatsResponse struct {
    AverageIndexedItemCount *string `json:"averageIndexedItemCount,omitempty"`
    Stats []DataSourceIndexStats `json:"stats,omitempty"`
    
}


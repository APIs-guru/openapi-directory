package shared



type GoogleCloudDatacatalogV1UsageSignal struct {
    FavoriteCount *string `json:"favoriteCount,omitempty"`
    UpdateTime *string `json:"updateTime,omitempty"`
    UsageWithinTimeRange map[string]GoogleCloudDatacatalogV1UsageStats `json:"usageWithinTimeRange,omitempty"`
    
}


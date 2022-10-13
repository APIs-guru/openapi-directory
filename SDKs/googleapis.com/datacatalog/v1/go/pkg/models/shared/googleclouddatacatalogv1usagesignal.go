package shared

type GoogleCloudDatacatalogV1UsageSignal struct {
	FavoriteCount        *string                                       `json:"favoriteCount"`
	UpdateTime           *string                                       `json:"updateTime"`
	UsageWithinTimeRange map[string]GoogleCloudDatacatalogV1UsageStats `json:"usageWithinTimeRange"`
}

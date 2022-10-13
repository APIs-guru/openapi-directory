package shared

type GoogleCloudDatacatalogV1beta1UsageSignal struct {
	UpdateTime           *string                                            `json:"updateTime"`
	UsageWithinTimeRange map[string]GoogleCloudDatacatalogV1beta1UsageStats `json:"usageWithinTimeRange"`
}

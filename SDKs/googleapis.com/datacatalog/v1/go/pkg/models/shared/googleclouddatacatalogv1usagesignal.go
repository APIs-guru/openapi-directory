package shared

// GoogleCloudDatacatalogV1UsageSignalInput
// The set of all usage signals that Data Catalog stores. Note: Usually, these signals are updated daily. In rare cases, an update may fail but will be performed again on the next day.
type GoogleCloudDatacatalogV1UsageSignalInput struct {
	UpdateTime *string `json:"updateTime,omitempty"`
}

// GoogleCloudDatacatalogV1UsageSignal
// The set of all usage signals that Data Catalog stores. Note: Usually, these signals are updated daily. In rare cases, an update may fail but will be performed again on the next day.
type GoogleCloudDatacatalogV1UsageSignal struct {
	UpdateTime           *string                                       `json:"updateTime,omitempty"`
	UsageWithinTimeRange map[string]GoogleCloudDatacatalogV1UsageStats `json:"usageWithinTimeRange,omitempty"`
}

package shared

// GoogleCloudDatacatalogV1beta1UsageStats
// Detailed counts on the entry's usage. Caveats: - Only BigQuery tables have usage stats - The usage stats only include BigQuery query jobs - The usage stats might be underestimated, e.g. wildcard table references are not yet counted in usage computation https://cloud.google.com/bigquery/docs/querying-wildcard-tables
type GoogleCloudDatacatalogV1beta1UsageStats struct {
	TotalCancellations                     *float32 `json:"totalCancellations,omitempty"`
	TotalCompletions                       *float32 `json:"totalCompletions,omitempty"`
	TotalExecutionTimeForCompletionsMillis *float32 `json:"totalExecutionTimeForCompletionsMillis,omitempty"`
	TotalFailures                          *float32 `json:"totalFailures,omitempty"`
}

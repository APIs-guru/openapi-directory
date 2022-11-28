package shared

// GoogleCloudDatacatalogV1UsageStats
// Detailed statistics on the entry's usage. Usage statistics have the following limitations: - Only BigQuery tables have them. - They only include BigQuery query jobs. - They might be underestimated because wildcard table references are not yet counted. For more information, see [Querying multiple tables using a wildcard table] (https://cloud.google.com/bigquery/docs/querying-wildcard-tables)
type GoogleCloudDatacatalogV1UsageStats struct {
	TotalCancellations                     *float32 `json:"totalCancellations,omitempty"`
	TotalCompletions                       *float32 `json:"totalCompletions,omitempty"`
	TotalExecutionTimeForCompletionsMillis *float32 `json:"totalExecutionTimeForCompletionsMillis,omitempty"`
	TotalFailures                          *float32 `json:"totalFailures,omitempty"`
}

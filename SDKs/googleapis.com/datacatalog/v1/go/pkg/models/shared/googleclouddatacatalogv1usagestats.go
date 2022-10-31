package shared

type GoogleCloudDatacatalogV1UsageStats struct {
	TotalCancellations                     *float32 `json:"totalCancellations,omitempty"`
	TotalCompletions                       *float32 `json:"totalCompletions,omitempty"`
	TotalExecutionTimeForCompletionsMillis *float32 `json:"totalExecutionTimeForCompletionsMillis,omitempty"`
	TotalFailures                          *float32 `json:"totalFailures,omitempty"`
}

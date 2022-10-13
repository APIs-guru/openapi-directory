package shared

type GoogleCloudDatacatalogV1UsageStats struct {
	TotalCancellations                     *float32 `json:"totalCancellations"`
	TotalCompletions                       *float32 `json:"totalCompletions"`
	TotalExecutionTimeForCompletionsMillis *float32 `json:"totalExecutionTimeForCompletionsMillis"`
	TotalFailures                          *float32 `json:"totalFailures"`
}

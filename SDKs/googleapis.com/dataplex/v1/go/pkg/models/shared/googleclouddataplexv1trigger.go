package shared

// GoogleCloudDataplexV1Trigger
// DataScan scheduling and trigger settings.
type GoogleCloudDataplexV1Trigger struct {
	OnDemand map[string]interface{}                `json:"onDemand,omitempty"`
	Schedule *GoogleCloudDataplexV1TriggerSchedule `json:"schedule,omitempty"`
}

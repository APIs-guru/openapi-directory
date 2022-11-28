package shared

// EnterpriseCrmEventbusProtoCloudSchedulerConfig
// Cloud Scheduler Trigger configuration
type EnterpriseCrmEventbusProtoCloudSchedulerConfig struct {
	CronTab             *string `json:"cronTab,omitempty"`
	ErrorMessage        *string `json:"errorMessage,omitempty"`
	Location            *string `json:"location,omitempty"`
	ServiceAccountEmail *string `json:"serviceAccountEmail,omitempty"`
}

package shared

// GoogleCloudIntegrationsV1alphaCloudSchedulerConfig
// Cloud Scheduler Trigger configuration
type GoogleCloudIntegrationsV1alphaCloudSchedulerConfig struct {
	CronTab             *string `json:"cronTab,omitempty"`
	ErrorMessage        *string `json:"errorMessage,omitempty"`
	Location            *string `json:"location,omitempty"`
	ServiceAccountEmail *string `json:"serviceAccountEmail,omitempty"`
}

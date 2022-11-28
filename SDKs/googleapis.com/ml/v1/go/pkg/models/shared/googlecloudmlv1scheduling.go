package shared

// GoogleCloudMlV1Scheduling
// All parameters related to scheduling of training jobs.
type GoogleCloudMlV1Scheduling struct {
	MaxRunningTime *string `json:"maxRunningTime,omitempty"`
	MaxWaitTime    *string `json:"maxWaitTime,omitempty"`
	Priority       *int32  `json:"priority,omitempty"`
}

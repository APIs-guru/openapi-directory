package shared

type GoogleCloudMlV1Scheduling struct {
	MaxRunningTime *string `json:"maxRunningTime"`
	MaxWaitTime    *string `json:"maxWaitTime"`
	Priority       *int32  `json:"priority"`
}

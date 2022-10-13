package shared

type GoogleCloudDatapipelinesV1ScheduleSpec struct {
	NextJobTime *string `json:"nextJobTime"`
	Schedule    *string `json:"schedule"`
	TimeZone    *string `json:"timeZone"`
}

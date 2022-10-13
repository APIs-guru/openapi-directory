package shared

type Attempt struct {
	DispatchTime   *string `json:"dispatchTime"`
	ResponseStatus *Status `json:"responseStatus"`
	ResponseTime   *string `json:"responseTime"`
	ScheduleTime   *string `json:"scheduleTime"`
}

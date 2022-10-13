package shared

type Schedule struct {
	CronSchedule *string `json:"cronSchedule"`
	Paused       *bool   `json:"paused"`
}

package shared

type DatafeedFetchSchedule struct {
	DayOfMonth   *int64  `json:"dayOfMonth"`
	FetchURL     *string `json:"fetchUrl"`
	Hour         *int64  `json:"hour"`
	MinuteOfHour *int64  `json:"minuteOfHour"`
	Password     *string `json:"password"`
	Paused       *bool   `json:"paused"`
	TimeZone     *string `json:"timeZone"`
	Username     *string `json:"username"`
	Weekday      *string `json:"weekday"`
}

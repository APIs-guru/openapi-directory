package shared

type DatafeedFetchSchedule struct {
	DayOfMonth   *int64  `json:"dayOfMonth,omitempty"`
	FetchURL     *string `json:"fetchUrl,omitempty"`
	Hour         *int64  `json:"hour,omitempty"`
	MinuteOfHour *int64  `json:"minuteOfHour,omitempty"`
	Password     *string `json:"password,omitempty"`
	Paused       *bool   `json:"paused,omitempty"`
	TimeZone     *string `json:"timeZone,omitempty"`
	Username     *string `json:"username,omitempty"`
	Weekday      *string `json:"weekday,omitempty"`
}

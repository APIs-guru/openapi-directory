package shared

type RepeatViewModel struct {
	Frequency *string `json:"frequency"`
	Interval  *int32  `json:"interval"`
	MonthDay  *string `json:"monthDay"`
	MonthType *string `json:"monthType"`
	Weekdays  *string `json:"weekdays"`
}

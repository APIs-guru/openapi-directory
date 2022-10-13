package shared

type RepeatUpdateModel struct {
	Frequency *string `json:"frequency"`
	Interval  *int32  `json:"interval"`
	MonthDay  *int32  `json:"monthDay"`
	MonthType *string `json:"monthType"`
	Weekdays  *string `json:"weekdays"`
}

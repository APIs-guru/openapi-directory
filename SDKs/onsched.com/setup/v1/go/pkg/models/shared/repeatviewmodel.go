package shared

type RepeatViewModel struct {
	Frequency *string `json:"frequency,omitempty"`
	Interval  *int32  `json:"interval,omitempty"`
	MonthDay  *string `json:"monthDay,omitempty"`
	MonthType *string `json:"monthType,omitempty"`
	Weekdays  *string `json:"weekdays,omitempty"`
}

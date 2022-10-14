package shared

type RepeatUpdateModel struct {
	Frequency *string `json:"frequency,omitempty"`
	Interval  *int32  `json:"interval,omitempty"`
	MonthDay  *int32  `json:"monthDay,omitempty"`
	MonthType *string `json:"monthType,omitempty"`
	Weekdays  *string `json:"weekdays,omitempty"`
}

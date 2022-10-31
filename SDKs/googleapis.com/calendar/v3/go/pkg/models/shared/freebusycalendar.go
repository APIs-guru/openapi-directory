package shared

type FreeBusyCalendar struct {
	Busy   []TimePeriod `json:"busy,omitempty"`
	Errors []Error      `json:"errors,omitempty"`
}

package shared

type FreeBusyCalendar struct {
	Busy   []TimePeriod `json:"busy"`
	Errors []Error      `json:"errors"`
}

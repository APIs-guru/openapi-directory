package shared

type FreeBusyGroup struct {
	Calendars []string `json:"calendars"`
	Errors    []Error  `json:"errors"`
}

package shared

type CalendarAuthViewModel struct {
	CalendarAuthURL *string `json:"calendarAuthUrl,omitempty"`
	CalendarID      *string `json:"calendarId,omitempty"`
	ObjectName      *string `json:"objectName,omitempty"`
}

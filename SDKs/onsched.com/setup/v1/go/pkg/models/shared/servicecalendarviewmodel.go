package shared

type ServiceCalendarViewModel struct {
	CalendarID   *string `json:"calendarId"`
	CalendarName *string `json:"calendarName"`
	ID           *string `json:"id"`
	LocationID   *string `json:"locationId"`
	ServiceID    *string `json:"serviceId"`
	ServiceName  *string `json:"serviceName"`
}

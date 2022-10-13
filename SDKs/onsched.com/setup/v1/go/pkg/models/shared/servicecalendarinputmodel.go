package shared

type ServiceCalendarInputModel struct {
	CalendarID *string `json:"calendarId"`
	LocationID *string `json:"locationId"`
	ServiceID  *string `json:"serviceId"`
}

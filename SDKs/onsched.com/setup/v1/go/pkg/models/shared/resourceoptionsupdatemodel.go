package shared

import (
	"time"
)

type ResourceOptionsUpdateModel struct {
	BioLink              *string    `json:"bioLink"`
	BookingNotification  *int32     `json:"bookingNotification"`
	CalendarAvailability *int32     `json:"calendarAvailability"`
	DisplayColor         *string    `json:"displayColor"`
	EffectiveDate        *time.Time `json:"effectiveDate"`
	Gender               *string    `json:"gender"`
	GoogleCalendarID     *string    `json:"googleCalendarId"`
	Hourly               *float64   `json:"hourly"`
	IgnoreBusinessHours  *bool      `json:"ignoreBusinessHours"`
	NotificationType     *int32     `json:"notificationType"`
	OutlookCalendarID    *string    `json:"outlookCalendarId"`
	SortKey              *int32     `json:"sortKey"`
}

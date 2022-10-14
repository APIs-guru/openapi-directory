package shared

import (
	"time"
)

type ResourceOptionsUpdateModel struct {
	BioLink              *string    `json:"bioLink,omitempty"`
	BookingNotification  *int32     `json:"bookingNotification,omitempty"`
	CalendarAvailability *int32     `json:"calendarAvailability,omitempty"`
	DisplayColor         *string    `json:"displayColor,omitempty"`
	EffectiveDate        *time.Time `json:"effectiveDate,omitempty"`
	Gender               *string    `json:"gender,omitempty"`
	GoogleCalendarID     *string    `json:"googleCalendarId,omitempty"`
	Hourly               *float64   `json:"hourly,omitempty"`
	IgnoreBusinessHours  *bool      `json:"ignoreBusinessHours,omitempty"`
	NotificationType     *int32     `json:"notificationType,omitempty"`
	OutlookCalendarID    *string    `json:"outlookCalendarId,omitempty"`
	SortKey              *int32     `json:"sortKey,omitempty"`
}

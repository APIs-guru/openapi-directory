package shared

import (
	"time"
)

type ResourceViewModel struct {
	BioLink              *string    `json:"bioLink,omitempty"`
	BookingNotification  *int32     `json:"bookingNotification,omitempty"`
	CalendarAvailability *int32     `json:"calendarAvailability,omitempty"`
	DeletedStatus        *bool      `json:"deletedStatus,omitempty"`
	DeletedTime          *time.Time `json:"deletedTime,omitempty"`
	Description          *string    `json:"description,omitempty"`
	EffectiveDate        *time.Time `json:"effectiveDate,omitempty"`
	Email                *string    `json:"email,omitempty"`
	Gender               *string    `json:"gender,omitempty"`
	GoogleCalendarID     *string    `json:"googleCalendarId,omitempty"`
	GroupID              *string    `json:"groupId,omitempty"`
	Hourly               *float64   `json:"hourly,omitempty"`
	ID                   *string    `json:"id,omitempty"`
	IgnoreBusinessHours  *bool      `json:"ignoreBusinessHours,omitempty"`
	ImageURL             *string    `json:"imageUrl,omitempty"`
	LocationID           *string    `json:"locationId,omitempty"`
	Name                 *string    `json:"name,omitempty"`
	NotificationType     *int32     `json:"notificationType,omitempty"`
	ObjectName           *string    `json:"objectName,omitempty"`
	OutlookCalendarID    *string    `json:"outlookCalendarId,omitempty"`
	SkypeName            *string    `json:"skypeName,omitempty"`
	SortKey              *int32     `json:"sortKey,omitempty"`
	TimezoneIana         *string    `json:"timezoneIana,omitempty"`
	TimezoneID           *string    `json:"timezoneId,omitempty"`
	TimezoneOffset       *int32     `json:"timezoneOffset,omitempty"`
}

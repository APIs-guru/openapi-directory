package shared

import (
	"time"
)

type ResourceViewModel struct {
	BioLink                   *string    `json:"bioLink"`
	BookingNotification       *int32     `json:"bookingNotification"`
	CalendarAvailability      *int32     `json:"calendarAvailability"`
	DeletedStatus             *bool      `json:"deletedStatus"`
	DeletedTime               *time.Time `json:"deletedTime"`
	Description               *string    `json:"description"`
	EffectiveDate             *time.Time `json:"effectiveDate"`
	Email                     *string    `json:"email"`
	Gender                    *string    `json:"gender"`
	GoogleCalendarAuthURL     *string    `json:"googleCalendarAuthUrl"`
	GoogleCalendarAuthorized  *bool      `json:"googleCalendarAuthorized"`
	GoogleCalendarID          *string    `json:"googleCalendarId"`
	GroupID                   *int32     `json:"groupId"`
	Hourly                    *float64   `json:"hourly"`
	ID                        *string    `json:"id"`
	IgnoreBusinessHours       *bool      `json:"ignoreBusinessHours"`
	ImageURL                  *string    `json:"imageUrl"`
	LocationID                *string    `json:"locationId"`
	Name                      *string    `json:"name"`
	NotificationType          *int32     `json:"notificationType"`
	ObjectName                *string    `json:"objectName"`
	OutlookCalendarAuthURL    *string    `json:"outlookCalendarAuthUrl"`
	OutlookCalendarAuthorized *bool      `json:"outlookCalendarAuthorized"`
	OutlookCalendarID         *string    `json:"outlookCalendarId"`
	SkypeName                 *string    `json:"skypeName"`
	SortKey                   *int32     `json:"sortKey"`
	TimezoneIana              *string    `json:"timezoneIana"`
	TimezoneID                *string    `json:"timezoneId"`
	TimezoneOffset            *int32     `json:"timezoneOffset"`
}

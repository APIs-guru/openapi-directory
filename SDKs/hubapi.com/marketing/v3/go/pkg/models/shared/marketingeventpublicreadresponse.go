package shared

import (
	"time"
)

type MarketingEventPublicReadResponse struct {
	Attendees        int32           `json:"attendees"`
	Cancellations    int32           `json:"cancellations"`
	CreatedAt        time.Time       `json:"createdAt"`
	CustomProperties []PropertyValue `json:"customProperties,omitempty"`
	EndDateTime      *time.Time      `json:"endDateTime,omitempty"`
	EventCancelled   *bool           `json:"eventCancelled,omitempty"`
	EventDescription *string         `json:"eventDescription,omitempty"`
	EventName        string          `json:"eventName"`
	EventOrganizer   string          `json:"eventOrganizer"`
	EventType        *string         `json:"eventType,omitempty"`
	EventURL         *string         `json:"eventUrl,omitempty"`
	ExternalEventID  string          `json:"externalEventId"`
	ID               string          `json:"id"`
	NoShows          int32           `json:"noShows"`
	Registrants      int32           `json:"registrants"`
	StartDateTime    *time.Time      `json:"startDateTime,omitempty"`
	UpdatedAt        time.Time       `json:"updatedAt"`
}

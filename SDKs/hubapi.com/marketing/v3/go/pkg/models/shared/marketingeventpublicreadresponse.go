package shared

import (
	"time"
)

type MarketingEventPublicReadResponse struct {
	Attendees        int32           `json:"attendees"`
	Cancellations    int32           `json:"cancellations"`
	CreatedAt        time.Time       `json:"createdAt"`
	CustomProperties []PropertyValue `json:"customProperties"`
	EndDateTime      *time.Time      `json:"endDateTime"`
	EventCancelled   *bool           `json:"eventCancelled"`
	EventDescription *string         `json:"eventDescription"`
	EventName        string          `json:"eventName"`
	EventOrganizer   string          `json:"eventOrganizer"`
	EventType        *string         `json:"eventType"`
	EventURL         *string         `json:"eventUrl"`
	ExternalEventID  string          `json:"externalEventId"`
	ID               string          `json:"id"`
	NoShows          int32           `json:"noShows"`
	Registrants      int32           `json:"registrants"`
	StartDateTime    *time.Time      `json:"startDateTime"`
	UpdatedAt        time.Time       `json:"updatedAt"`
}

package shared

import (
	"time"
)

type MarketingEventPublicDefaultResponse struct {
	CreatedAt        time.Time       `json:"createdAt"`
	CustomProperties []PropertyValue `json:"customProperties"`
	EndDateTime      *time.Time      `json:"endDateTime"`
	EventCancelled   *bool           `json:"eventCancelled"`
	EventDescription *string         `json:"eventDescription"`
	EventName        string          `json:"eventName"`
	EventOrganizer   string          `json:"eventOrganizer"`
	EventType        *string         `json:"eventType"`
	EventURL         *string         `json:"eventUrl"`
	ID               string          `json:"id"`
	StartDateTime    *time.Time      `json:"startDateTime"`
	UpdatedAt        time.Time       `json:"updatedAt"`
}

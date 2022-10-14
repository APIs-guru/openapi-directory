package shared

import (
	"time"
)

type MarketingEventPublicDefaultResponse struct {
	CreatedAt        time.Time       `json:"createdAt"`
	CustomProperties []PropertyValue `json:"customProperties,omitempty"`
	EndDateTime      *time.Time      `json:"endDateTime,omitempty"`
	EventCancelled   *bool           `json:"eventCancelled,omitempty"`
	EventDescription *string         `json:"eventDescription,omitempty"`
	EventName        string          `json:"eventName"`
	EventOrganizer   string          `json:"eventOrganizer"`
	EventType        *string         `json:"eventType,omitempty"`
	EventURL         *string         `json:"eventUrl,omitempty"`
	ID               string          `json:"id"`
	StartDateTime    *time.Time      `json:"startDateTime,omitempty"`
	UpdatedAt        time.Time       `json:"updatedAt"`
}

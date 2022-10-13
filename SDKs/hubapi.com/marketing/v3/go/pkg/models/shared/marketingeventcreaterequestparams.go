package shared

import (
	"time"
)

type MarketingEventCreateRequestParams struct {
	CustomProperties  []PropertyValue `json:"customProperties"`
	EndDateTime       *time.Time      `json:"endDateTime"`
	EventCancelled    *bool           `json:"eventCancelled"`
	EventDescription  *string         `json:"eventDescription"`
	EventName         string          `json:"eventName"`
	EventOrganizer    string          `json:"eventOrganizer"`
	EventType         *string         `json:"eventType"`
	EventURL          *string         `json:"eventUrl"`
	ExternalAccountID string          `json:"externalAccountId"`
	ExternalEventID   string          `json:"externalEventId"`
	StartDateTime     *time.Time      `json:"startDateTime"`
}

package shared

import (
"time")

type MarketingEventDefaultResponse struct {
    CustomProperties []PropertyValue `json:"customProperties,omitempty"`
    EndDateTime *time.Time `json:"endDateTime,omitempty"`
    EventCancelled *bool `json:"eventCancelled,omitempty"`
    EventDescription *string `json:"eventDescription,omitempty"`
    EventName string `json:"eventName"`
    EventOrganizer string `json:"eventOrganizer"`
    EventType *string `json:"eventType,omitempty"`
    EventURL *string `json:"eventUrl,omitempty"`
    StartDateTime *time.Time `json:"startDateTime,omitempty"`
    
}


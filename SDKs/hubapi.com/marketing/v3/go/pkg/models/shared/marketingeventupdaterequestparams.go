package shared

import (
"time")

type MarketingEventUpdateRequestParams struct {
    CustomProperties []PropertyValue `json:"customProperties,omitempty"`
    EndDateTime *time.Time `json:"endDateTime,omitempty"`
    EventCancelled *bool `json:"eventCancelled,omitempty"`
    EventDescription *string `json:"eventDescription,omitempty"`
    EventName *string `json:"eventName,omitempty"`
    EventOrganizer *string `json:"eventOrganizer,omitempty"`
    EventType *string `json:"eventType,omitempty"`
    EventURL *string `json:"eventUrl,omitempty"`
    StartDateTime *time.Time `json:"startDateTime,omitempty"`
    
}


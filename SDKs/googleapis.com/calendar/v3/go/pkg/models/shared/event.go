package shared

import (
"time")

type EventCreator struct {
    DisplayName *string `json:"displayName,omitempty"`
    Email *string `json:"email,omitempty"`
    ID *string `json:"id,omitempty"`
    Self *bool `json:"self,omitempty"`
    
}

type EventExtendedProperties struct {
    Private map[string]string `json:"private,omitempty"`
    Shared map[string]string `json:"shared,omitempty"`
    
}

type EventGadget struct {
    Display *string `json:"display,omitempty"`
    Height *int32 `json:"height,omitempty"`
    IconLink *string `json:"iconLink,omitempty"`
    Link *string `json:"link,omitempty"`
    Preferences map[string]string `json:"preferences,omitempty"`
    Title *string `json:"title,omitempty"`
    Type *string `json:"type,omitempty"`
    Width *int32 `json:"width,omitempty"`
    
}

type EventOrganizer struct {
    DisplayName *string `json:"displayName,omitempty"`
    Email *string `json:"email,omitempty"`
    ID *string `json:"id,omitempty"`
    Self *bool `json:"self,omitempty"`
    
}

type EventReminders struct {
    Overrides []EventReminder `json:"overrides,omitempty"`
    UseDefault *bool `json:"useDefault,omitempty"`
    
}

type EventSource struct {
    Title *string `json:"title,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

type Event struct {
    AnyoneCanAddSelf *bool `json:"anyoneCanAddSelf,omitempty"`
    Attachments []EventAttachment `json:"attachments,omitempty"`
    Attendees []EventAttendee `json:"attendees,omitempty"`
    AttendeesOmitted *bool `json:"attendeesOmitted,omitempty"`
    ColorID *string `json:"colorId,omitempty"`
    ConferenceData *ConferenceData `json:"conferenceData,omitempty"`
    Created *time.Time `json:"created,omitempty"`
    Creator *EventCreator `json:"creator,omitempty"`
    Description *string `json:"description,omitempty"`
    End *EventDateTime `json:"end,omitempty"`
    EndTimeUnspecified *bool `json:"endTimeUnspecified,omitempty"`
    Etag *string `json:"etag,omitempty"`
    EventType *string `json:"eventType,omitempty"`
    ExtendedProperties *EventExtendedProperties `json:"extendedProperties,omitempty"`
    Gadget *EventGadget `json:"gadget,omitempty"`
    GuestsCanInviteOthers *bool `json:"guestsCanInviteOthers,omitempty"`
    GuestsCanModify *bool `json:"guestsCanModify,omitempty"`
    GuestsCanSeeOtherGuests *bool `json:"guestsCanSeeOtherGuests,omitempty"`
    HangoutLink *string `json:"hangoutLink,omitempty"`
    HTMLLink *string `json:"htmlLink,omitempty"`
    ICalUID *string `json:"iCalUID,omitempty"`
    ID *string `json:"id,omitempty"`
    Kind *string `json:"kind,omitempty"`
    Location *string `json:"location,omitempty"`
    Locked *bool `json:"locked,omitempty"`
    Organizer *EventOrganizer `json:"organizer,omitempty"`
    OriginalStartTime *EventDateTime `json:"originalStartTime,omitempty"`
    PrivateCopy *bool `json:"privateCopy,omitempty"`
    Recurrence []string `json:"recurrence,omitempty"`
    RecurringEventID *string `json:"recurringEventId,omitempty"`
    Reminders *EventReminders `json:"reminders,omitempty"`
    Sequence *int32 `json:"sequence,omitempty"`
    Source *EventSource `json:"source,omitempty"`
    Start *EventDateTime `json:"start,omitempty"`
    Status *string `json:"status,omitempty"`
    Summary *string `json:"summary,omitempty"`
    Transparency *string `json:"transparency,omitempty"`
    Updated *time.Time `json:"updated,omitempty"`
    Visibility *string `json:"visibility,omitempty"`
    
}


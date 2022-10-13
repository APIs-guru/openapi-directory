package shared

import (
	"time"
)

type EventCreator struct {
	DisplayName *string `json:"displayName"`
	Email       *string `json:"email"`
	ID          *string `json:"id"`
	Self        *bool   `json:"self"`
}

type EventExtendedProperties struct {
	Private map[string]string `json:"private"`
	Shared  map[string]string `json:"shared"`
}

type EventGadget struct {
	Display     *string           `json:"display"`
	Height      *int32            `json:"height"`
	IconLink    *string           `json:"iconLink"`
	Link        *string           `json:"link"`
	Preferences map[string]string `json:"preferences"`
	Title       *string           `json:"title"`
	Type        *string           `json:"type"`
	Width       *int32            `json:"width"`
}

type EventOrganizer struct {
	DisplayName *string `json:"displayName"`
	Email       *string `json:"email"`
	ID          *string `json:"id"`
	Self        *bool   `json:"self"`
}

type EventReminders struct {
	Overrides  []EventReminder `json:"overrides"`
	UseDefault *bool           `json:"useDefault"`
}

type EventSource struct {
	Title *string `json:"title"`
	URL   *string `json:"url"`
}

type Event struct {
	AnyoneCanAddSelf        *bool                    `json:"anyoneCanAddSelf"`
	Attachments             []EventAttachment        `json:"attachments"`
	Attendees               []EventAttendee          `json:"attendees"`
	AttendeesOmitted        *bool                    `json:"attendeesOmitted"`
	ColorID                 *string                  `json:"colorId"`
	ConferenceData          *ConferenceData          `json:"conferenceData"`
	Created                 *time.Time               `json:"created"`
	Creator                 *EventCreator            `json:"creator"`
	Description             *string                  `json:"description"`
	End                     *EventDateTime           `json:"end"`
	EndTimeUnspecified      *bool                    `json:"endTimeUnspecified"`
	Etag                    *string                  `json:"etag"`
	EventType               *string                  `json:"eventType"`
	ExtendedProperties      *EventExtendedProperties `json:"extendedProperties"`
	Gadget                  *EventGadget             `json:"gadget"`
	GuestsCanInviteOthers   *bool                    `json:"guestsCanInviteOthers"`
	GuestsCanModify         *bool                    `json:"guestsCanModify"`
	GuestsCanSeeOtherGuests *bool                    `json:"guestsCanSeeOtherGuests"`
	HangoutLink             *string                  `json:"hangoutLink"`
	HTMLLink                *string                  `json:"htmlLink"`
	ICalUID                 *string                  `json:"iCalUID"`
	ID                      *string                  `json:"id"`
	Kind                    *string                  `json:"kind"`
	Location                *string                  `json:"location"`
	Locked                  *bool                    `json:"locked"`
	Organizer               *EventOrganizer          `json:"organizer"`
	OriginalStartTime       *EventDateTime           `json:"originalStartTime"`
	PrivateCopy             *bool                    `json:"privateCopy"`
	Recurrence              []string                 `json:"recurrence"`
	RecurringEventID        *string                  `json:"recurringEventId"`
	Reminders               *EventReminders          `json:"reminders"`
	Sequence                *int32                   `json:"sequence"`
	Source                  *EventSource             `json:"source"`
	Start                   *EventDateTime           `json:"start"`
	Status                  *string                  `json:"status"`
	Summary                 *string                  `json:"summary"`
	Transparency            *string                  `json:"transparency"`
	Updated                 *time.Time               `json:"updated"`
	Visibility              *string                  `json:"visibility"`
}

package shared

type EventAttendee struct {
	AdditionalGuests *int32  `json:"additionalGuests,omitempty"`
	Comment          *string `json:"comment,omitempty"`
	DisplayName      *string `json:"displayName,omitempty"`
	Email            *string `json:"email,omitempty"`
	ID               *string `json:"id,omitempty"`
	Optional         *bool   `json:"optional,omitempty"`
	Organizer        *bool   `json:"organizer,omitempty"`
	Resource         *bool   `json:"resource,omitempty"`
	ResponseStatus   *string `json:"responseStatus,omitempty"`
	Self             *bool   `json:"self,omitempty"`
}

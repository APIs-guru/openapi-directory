package shared

type EventAttendee struct {
	AdditionalGuests *int32  `json:"additionalGuests"`
	Comment          *string `json:"comment"`
	DisplayName      *string `json:"displayName"`
	Email            *string `json:"email"`
	ID               *string `json:"id"`
	Optional         *bool   `json:"optional"`
	Organizer        *bool   `json:"organizer"`
	Resource         *bool   `json:"resource"`
	ResponseStatus   *string `json:"responseStatus"`
	Self             *bool   `json:"self"`
}

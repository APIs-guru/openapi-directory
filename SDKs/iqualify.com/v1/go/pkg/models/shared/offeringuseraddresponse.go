package shared

type OfferingUserAddResponse struct {
	Email                 *string             `json:"email,omitempty"`
	FirstName             *string             `json:"firstName,omitempty"`
	Invite                *Invite             `json:"invite,omitempty"`
	IsFacilitator         *bool               `json:"isFacilitator,omitempty"`
	IsMarker              *bool               `json:"isMarker,omitempty"`
	IsReadonly            *bool               `json:"isReadonly,omitempty"`
	LastName              *string             `json:"lastName,omitempty"`
	Metadata              *UserMetadata       `json:"metadata,omitempty"`
	PersonID              *string             `json:"personId,omitempty"`
	Profile               *UserProfileRequest `json:"profile,omitempty"`
	SendInvite            *bool               `json:"sendInvite,omitempty"`
	SendNotificationEmail *bool               `json:"sendNotificationEmail,omitempty"`
}

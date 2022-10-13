package shared

type OfferingUserAddResponse struct {
	Email                 *string             `json:"email"`
	FirstName             *string             `json:"firstName"`
	Invite                *Invite             `json:"invite"`
	IsFacilitator         *bool               `json:"isFacilitator"`
	IsMarker              *bool               `json:"isMarker"`
	IsReadonly            *bool               `json:"isReadonly"`
	LastName              *string             `json:"lastName"`
	Metadata              *UserMetadata       `json:"metadata"`
	PersonID              *string             `json:"personId"`
	Profile               *UserProfileRequest `json:"profile"`
	SendInvite            *bool               `json:"sendInvite"`
	SendNotificationEmail *bool               `json:"sendNotificationEmail"`
}

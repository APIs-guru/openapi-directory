package shared

type User struct {
	Email      *string             `json:"email,omitempty"`
	FirstName  *string             `json:"firstName,omitempty"`
	LastName   *string             `json:"lastName,omitempty"`
	Metadata   *UserMetadata       `json:"metadata,omitempty"`
	PersonID   *string             `json:"personId,omitempty"`
	Profile    *UserProfileRequest `json:"profile,omitempty"`
	SendInvite *bool               `json:"sendInvite,omitempty"`
}

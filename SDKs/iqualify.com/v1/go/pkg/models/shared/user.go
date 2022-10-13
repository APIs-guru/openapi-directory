package shared

type User struct {
	Email      *string             `json:"email"`
	FirstName  *string             `json:"firstName"`
	LastName   *string             `json:"lastName"`
	Metadata   *UserMetadata       `json:"metadata"`
	PersonID   *string             `json:"personId"`
	Profile    *UserProfileRequest `json:"profile"`
	SendInvite *bool               `json:"sendInvite"`
}

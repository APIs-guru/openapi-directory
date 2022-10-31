package shared

type Moderator struct {
	AvatarURL *string `json:"avatarUrl,omitempty"`
	FirstName *string `json:"firstName,omitempty"`
	ID        *string `json:"id,omitempty"`
	LastName  *string `json:"lastName,omitempty"`
}

package shared

type Moderator struct {
	AvatarURL *string `json:"avatarUrl"`
	FirstName *string `json:"firstName"`
	ID        *string `json:"id"`
	LastName  *string `json:"lastName"`
}

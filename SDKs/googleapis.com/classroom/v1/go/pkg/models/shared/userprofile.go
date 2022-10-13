package shared

type UserProfile struct {
	EmailAddress    *string            `json:"emailAddress"`
	ID              *string            `json:"id"`
	Name            *Name              `json:"name"`
	Permissions     []GlobalPermission `json:"permissions"`
	PhotoURL        *string            `json:"photoUrl"`
	VerifiedTeacher *bool              `json:"verifiedTeacher"`
}

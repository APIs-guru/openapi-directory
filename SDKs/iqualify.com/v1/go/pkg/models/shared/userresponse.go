package shared

import (
	"time"
)

type UserResponse struct {
	AvatarURL     *string       `json:"avatarUrl"`
	Email         *string       `json:"email"`
	FirstAccessAt *time.Time    `json:"firstAccessAt"`
	FirstName     *string       `json:"firstName"`
	ID            *string       `json:"id"`
	Invite        *Invite       `json:"invite"`
	LastAccessAt  *time.Time    `json:"lastAccessAt"`
	LastName      *string       `json:"lastName"`
	Metadata      *UserMetadata `json:"metadata"`
	PersonID      *string       `json:"personId"`
	Profile       *UserProfile  `json:"profile"`
}

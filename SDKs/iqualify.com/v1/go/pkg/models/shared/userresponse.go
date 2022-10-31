package shared

import (
"time")

type UserResponse struct {
    AvatarURL *string `json:"avatarUrl,omitempty"`
    Email *string `json:"email,omitempty"`
    FirstAccessAt *time.Time `json:"firstAccessAt,omitempty"`
    FirstName *string `json:"firstName,omitempty"`
    ID *string `json:"id,omitempty"`
    Invite *Invite `json:"invite,omitempty"`
    LastAccessAt *time.Time `json:"lastAccessAt,omitempty"`
    LastName *string `json:"lastName,omitempty"`
    Metadata *UserMetadata `json:"metadata,omitempty"`
    PersonID *string `json:"personId,omitempty"`
    Profile *UserProfile `json:"profile,omitempty"`
    
}


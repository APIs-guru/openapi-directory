package shared

// KnownUser
// A known user.
type KnownUser struct {
	IsCurrentUser *bool   `json:"isCurrentUser,omitempty"`
	PersonName    *string `json:"personName,omitempty"`
}

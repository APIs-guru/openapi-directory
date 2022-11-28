package shared

// UserProfileList
// Represents the list of user profiles.
type UserProfileList struct {
	Etag  *string       `json:"etag,omitempty"`
	Items []UserProfile `json:"items,omitempty"`
	Kind  *string       `json:"kind,omitempty"`
}

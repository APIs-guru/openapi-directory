package shared

type UserProfileList struct {
	Etag  *string       `json:"etag,omitempty"`
	Items []UserProfile `json:"items,omitempty"`
	Kind  *string       `json:"kind,omitempty"`
}

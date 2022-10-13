package shared

type UserProfileList struct {
	Etag  *string       `json:"etag"`
	Items []UserProfile `json:"items"`
	Kind  *string       `json:"kind"`
}

package shared

type PostUserInfosList struct {
	Items         []PostUserInfo `json:"items"`
	Kind          *string        `json:"kind"`
	NextPageToken *string        `json:"nextPageToken"`
}

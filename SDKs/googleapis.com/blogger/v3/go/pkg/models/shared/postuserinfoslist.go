package shared

type PostUserInfosList struct {
	Items         []PostUserInfo `json:"items,omitempty"`
	Kind          *string        `json:"kind,omitempty"`
	NextPageToken *string        `json:"nextPageToken,omitempty"`
}

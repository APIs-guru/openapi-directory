package shared

type PostList struct {
	Etag          *string `json:"etag,omitempty"`
	Items         []Post  `json:"items,omitempty"`
	Kind          *string `json:"kind,omitempty"`
	NextPageToken *string `json:"nextPageToken,omitempty"`
	PrevPageToken *string `json:"prevPageToken,omitempty"`
}

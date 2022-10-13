package shared

type PostList struct {
	Etag          *string `json:"etag"`
	Items         []Post  `json:"items"`
	Kind          *string `json:"kind"`
	NextPageToken *string `json:"nextPageToken"`
	PrevPageToken *string `json:"prevPageToken"`
}

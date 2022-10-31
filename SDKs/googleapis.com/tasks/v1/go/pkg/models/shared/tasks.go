package shared

type Tasks struct {
	Etag          *string `json:"etag,omitempty"`
	Items         []Task  `json:"items,omitempty"`
	Kind          *string `json:"kind,omitempty"`
	NextPageToken *string `json:"nextPageToken,omitempty"`
}

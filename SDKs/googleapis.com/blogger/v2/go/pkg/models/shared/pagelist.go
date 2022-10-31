package shared

type PageList struct {
	Etag          *string `json:"etag,omitempty"`
	Items         []Page  `json:"items,omitempty"`
	Kind          *string `json:"kind,omitempty"`
	NextPageToken *string `json:"nextPageToken,omitempty"`
}

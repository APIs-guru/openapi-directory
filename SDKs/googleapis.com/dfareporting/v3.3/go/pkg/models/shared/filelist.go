package shared

type FileList struct {
	Etag          *string `json:"etag,omitempty"`
	Items         []File  `json:"items,omitempty"`
	Kind          *string `json:"kind,omitempty"`
	NextPageToken *string `json:"nextPageToken,omitempty"`
}

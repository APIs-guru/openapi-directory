package shared

type ReportList struct {
	Etag          *string  `json:"etag,omitempty"`
	Items         []Report `json:"items,omitempty"`
	Kind          *string  `json:"kind,omitempty"`
	NextPageToken *string  `json:"nextPageToken,omitempty"`
}

package shared

type Settings struct {
	Etag          *string   `json:"etag,omitempty"`
	Items         []Setting `json:"items,omitempty"`
	Kind          *string   `json:"kind,omitempty"`
	NextPageToken *string   `json:"nextPageToken,omitempty"`
	NextSyncToken *string   `json:"nextSyncToken,omitempty"`
}

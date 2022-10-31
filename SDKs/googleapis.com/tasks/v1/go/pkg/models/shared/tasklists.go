package shared

type TaskLists struct {
	Etag          *string    `json:"etag,omitempty"`
	Items         []TaskList `json:"items,omitempty"`
	Kind          *string    `json:"kind,omitempty"`
	NextPageToken *string    `json:"nextPageToken,omitempty"`
}

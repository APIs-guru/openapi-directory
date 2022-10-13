package shared

type TaskLists struct {
	Etag          *string    `json:"etag"`
	Items         []TaskList `json:"items"`
	Kind          *string    `json:"kind"`
	NextPageToken *string    `json:"nextPageToken"`
}

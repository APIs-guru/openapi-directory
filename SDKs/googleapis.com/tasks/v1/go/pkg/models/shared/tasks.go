package shared

type Tasks struct {
	Etag          *string `json:"etag"`
	Items         []Task  `json:"items"`
	Kind          *string `json:"kind"`
	NextPageToken *string `json:"nextPageToken"`
}

package shared

type FileList struct {
	Etag          *string `json:"etag"`
	Items         []File  `json:"items"`
	Kind          *string `json:"kind"`
	NextPageToken *string `json:"nextPageToken"`
}

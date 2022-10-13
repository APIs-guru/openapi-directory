package shared

type PageList struct {
	Etag          *string `json:"etag"`
	Items         []Page  `json:"items"`
	Kind          *string `json:"kind"`
	NextPageToken *string `json:"nextPageToken"`
}

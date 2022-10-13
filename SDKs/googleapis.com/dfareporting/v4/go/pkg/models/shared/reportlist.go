package shared

type ReportList struct {
	Etag          *string  `json:"etag"`
	Items         []Report `json:"items"`
	Kind          *string  `json:"kind"`
	NextPageToken *string  `json:"nextPageToken"`
}

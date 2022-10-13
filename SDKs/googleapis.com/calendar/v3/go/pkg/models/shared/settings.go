package shared

type Settings struct {
	Etag          *string   `json:"etag"`
	Items         []Setting `json:"items"`
	Kind          *string   `json:"kind"`
	NextPageToken *string   `json:"nextPageToken"`
	NextSyncToken *string   `json:"nextSyncToken"`
}

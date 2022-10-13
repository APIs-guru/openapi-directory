package shared

type CalendarList struct {
	Etag          *string             `json:"etag"`
	Items         []CalendarListEntry `json:"items"`
	Kind          *string             `json:"kind"`
	NextPageToken *string             `json:"nextPageToken"`
	NextSyncToken *string             `json:"nextSyncToken"`
}

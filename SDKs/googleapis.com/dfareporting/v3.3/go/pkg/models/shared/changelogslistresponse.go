package shared

type ChangeLogsListResponse struct {
	ChangeLogs    []ChangeLog `json:"changeLogs"`
	Kind          *string     `json:"kind"`
	NextPageToken *string     `json:"nextPageToken"`
}

package shared

type ChangeLogsListResponse struct {
	ChangeLogs    []ChangeLog `json:"changeLogs,omitempty"`
	Kind          *string     `json:"kind,omitempty"`
	NextPageToken *string     `json:"nextPageToken,omitempty"`
}

package shared

type ListDashboardsResponse struct {
	Dashboards    []Dashboard `json:"dashboards"`
	NextPageToken *string     `json:"nextPageToken"`
}

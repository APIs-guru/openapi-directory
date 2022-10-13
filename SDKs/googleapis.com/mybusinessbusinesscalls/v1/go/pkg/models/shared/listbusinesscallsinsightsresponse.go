package shared

type ListBusinessCallsInsightsResponse struct {
	BusinessCallsInsights []BusinessCallsInsights `json:"businessCallsInsights"`
	NextPageToken         *string                 `json:"nextPageToken"`
}

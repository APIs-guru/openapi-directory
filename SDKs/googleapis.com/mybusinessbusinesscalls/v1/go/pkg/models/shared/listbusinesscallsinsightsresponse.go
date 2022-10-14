package shared

type ListBusinessCallsInsightsResponse struct {
	BusinessCallsInsights []BusinessCallsInsights `json:"businessCallsInsights,omitempty"`
	NextPageToken         *string                 `json:"nextPageToken,omitempty"`
}

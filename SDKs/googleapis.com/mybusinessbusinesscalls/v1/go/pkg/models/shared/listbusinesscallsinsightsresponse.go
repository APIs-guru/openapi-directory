package shared

// ListBusinessCallsInsightsResponse
// Response message for ListBusinessCallsInsights.
type ListBusinessCallsInsightsResponse struct {
	BusinessCallsInsights []BusinessCallsInsights `json:"businessCallsInsights,omitempty"`
	NextPageToken         *string                 `json:"nextPageToken,omitempty"`
}

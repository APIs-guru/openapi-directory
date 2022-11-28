package shared

// GoogleCloudRecommendationengineV1beta1ListUserEventsResponse
// Response message for ListUserEvents method.
type GoogleCloudRecommendationengineV1beta1ListUserEventsResponse struct {
	NextPageToken *string                                           `json:"nextPageToken,omitempty"`
	UserEvents    []GoogleCloudRecommendationengineV1beta1UserEvent `json:"userEvents,omitempty"`
}

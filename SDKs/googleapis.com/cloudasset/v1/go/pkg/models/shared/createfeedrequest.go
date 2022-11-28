package shared

// CreateFeedRequest
// Create asset feed request.
type CreateFeedRequest struct {
	Feed   *Feed   `json:"feed,omitempty"`
	FeedID *string `json:"feedId,omitempty"`
}

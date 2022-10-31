package shared

type CreateFeedRequest struct {
	Feed   *Feed   `json:"feed,omitempty"`
	FeedID *string `json:"feedId,omitempty"`
}

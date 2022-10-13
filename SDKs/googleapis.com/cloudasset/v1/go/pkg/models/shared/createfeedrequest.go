package shared

type CreateFeedRequest struct {
	Feed   *Feed   `json:"feed"`
	FeedID *string `json:"feedId"`
}

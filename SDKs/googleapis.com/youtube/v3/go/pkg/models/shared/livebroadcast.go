package shared

type LiveBroadcast struct {
	ContentDetails *LiveBroadcastContentDetails `json:"contentDetails"`
	Etag           *string                      `json:"etag"`
	ID             *string                      `json:"id"`
	Kind           *string                      `json:"kind"`
	Snippet        *LiveBroadcastSnippet        `json:"snippet"`
	Statistics     *LiveBroadcastStatistics     `json:"statistics"`
	Status         *LiveBroadcastStatus         `json:"status"`
}

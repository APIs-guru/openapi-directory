package shared

// LiveBroadcast
// A *liveBroadcast* resource represents an event that will be streamed, via live video, on YouTube.
type LiveBroadcast struct {
	ContentDetails *LiveBroadcastContentDetails `json:"contentDetails,omitempty"`
	Etag           *string                      `json:"etag,omitempty"`
	ID             *string                      `json:"id,omitempty"`
	Kind           *string                      `json:"kind,omitempty"`
	Snippet        *LiveBroadcastSnippet        `json:"snippet,omitempty"`
	Statistics     *LiveBroadcastStatistics     `json:"statistics,omitempty"`
	Status         *LiveBroadcastStatus         `json:"status,omitempty"`
}

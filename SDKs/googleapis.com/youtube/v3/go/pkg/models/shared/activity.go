package shared

// Activity
// An *activity* resource contains information about an action that a particular channel, or user, has taken on YouTube.The actions reported in activity feeds include rating a video, sharing a video, marking a video as a favorite, commenting on a video, uploading a video, and so forth. Each activity resource identifies the type of action, the channel associated with the action, and the resource(s) associated with the action, such as the video that was rated or uploaded.
type Activity struct {
	ContentDetails *ActivityContentDetails `json:"contentDetails,omitempty"`
	Etag           *string                 `json:"etag,omitempty"`
	ID             *string                 `json:"id,omitempty"`
	Kind           *string                 `json:"kind,omitempty"`
	Snippet        *ActivitySnippet        `json:"snippet,omitempty"`
}

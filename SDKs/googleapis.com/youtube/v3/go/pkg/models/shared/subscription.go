package shared

// Subscription
// A *subscription* resource contains information about a YouTube user subscription. A subscription notifies a user when new videos are added to a channel or when another user takes one of several actions on YouTube, such as uploading a video, rating a video, or commenting on a video.
type Subscription struct {
	ContentDetails    *SubscriptionContentDetails    `json:"contentDetails,omitempty"`
	Etag              *string                        `json:"etag,omitempty"`
	ID                *string                        `json:"id,omitempty"`
	Kind              *string                        `json:"kind,omitempty"`
	Snippet           *SubscriptionSnippet           `json:"snippet,omitempty"`
	SubscriberSnippet *SubscriptionSubscriberSnippet `json:"subscriberSnippet,omitempty"`
}

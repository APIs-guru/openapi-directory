package shared

type Subscription struct {
	ContentDetails    *SubscriptionContentDetails    `json:"contentDetails,omitempty"`
	Etag              *string                        `json:"etag,omitempty"`
	ID                *string                        `json:"id,omitempty"`
	Kind              *string                        `json:"kind,omitempty"`
	Snippet           *SubscriptionSnippet           `json:"snippet,omitempty"`
	SubscriberSnippet *SubscriptionSubscriberSnippet `json:"subscriberSnippet,omitempty"`
}

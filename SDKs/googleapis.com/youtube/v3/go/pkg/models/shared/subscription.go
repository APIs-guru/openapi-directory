package shared

type Subscription struct {
	ContentDetails    *SubscriptionContentDetails    `json:"contentDetails"`
	Etag              *string                        `json:"etag"`
	ID                *string                        `json:"id"`
	Kind              *string                        `json:"kind"`
	Snippet           *SubscriptionSnippet           `json:"snippet"`
	SubscriberSnippet *SubscriptionSubscriberSnippet `json:"subscriberSnippet"`
}

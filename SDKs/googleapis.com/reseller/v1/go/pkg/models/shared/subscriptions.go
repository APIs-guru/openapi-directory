package shared

type Subscriptions struct {
	Kind          *string        `json:"kind"`
	NextPageToken *string        `json:"nextPageToken"`
	Subscriptions []Subscription `json:"subscriptions"`
}

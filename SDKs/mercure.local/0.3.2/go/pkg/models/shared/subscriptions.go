package shared

type Subscriptions struct {
	AtContext     string         `json:"@context"`
	ID            string         `json:"id"`
	LastEventID   string         `json:"lastEventID"`
	Subscriptions []Subscription `json:"subscriptions"`
	Type          string         `json:"type"`
}

package shared

type Subscription struct {
	AtContext   *string                `json:"@context,omitempty"`
	Active      bool                   `json:"active"`
	ID          string                 `json:"id"`
	LastEventID *string                `json:"lastEventID,omitempty"`
	Payload     map[string]interface{} `json:"payload,omitempty"`
	Subscriber  string                 `json:"subscriber"`
	Topic       string                 `json:"topic"`
	Type        string                 `json:"type"`
}

package shared

type MarketingEventSubscriber struct {
	InteractionDateTime int64             `json:"interactionDateTime"`
	Properties          map[string]string `json:"properties"`
	Vid                 *int32            `json:"vid"`
}

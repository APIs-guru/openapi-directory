package shared

// BatchInputMarketingEventSubscriber
// List of HubSpot contacts to subscribe to the marketing event
type BatchInputMarketingEventSubscriber struct {
	Inputs []MarketingEventSubscriber `json:"inputs"`
}

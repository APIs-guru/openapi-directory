package shared

// BatchInputMarketingEventEmailSubscriber
// List of marketing event details to create or update
type BatchInputMarketingEventEmailSubscriber struct {
	Inputs []MarketingEventEmailSubscriber `json:"inputs"`
}

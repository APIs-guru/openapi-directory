package shared

// FeedOutputConfig
// Output configuration for asset feed destination.
type FeedOutputConfig struct {
	PubsubDestination *PubsubDestination `json:"pubsubDestination,omitempty"`
}

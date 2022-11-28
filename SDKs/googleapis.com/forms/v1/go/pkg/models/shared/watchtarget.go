package shared

// WatchTarget
// The target for notification delivery.
type WatchTarget struct {
	Topic *CloudPubsubTopic `json:"topic,omitempty"`
}

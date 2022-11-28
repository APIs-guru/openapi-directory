package shared

// Snapshot
// A snapshot resource. Snapshots are used in [Seek](https://cloud.google.com/pubsub/docs/replay-overview) operations, which allow you to manage message acknowledgments in bulk. That is, you can set the acknowledgment state of messages in an existing subscription to the state captured by a snapshot.
type Snapshot struct {
	ExpireTime *string           `json:"expireTime,omitempty"`
	Labels     map[string]string `json:"labels,omitempty"`
	Name       *string           `json:"name,omitempty"`
	Topic      *string           `json:"topic,omitempty"`
}

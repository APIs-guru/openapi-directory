package shared

// PubsubSnapshotMetadata
// Represents a Pubsub snapshot.
type PubsubSnapshotMetadata struct {
	ExpireTime   *string `json:"expireTime,omitempty"`
	SnapshotName *string `json:"snapshotName,omitempty"`
	TopicName    *string `json:"topicName,omitempty"`
}

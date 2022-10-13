package shared

type PubsubSnapshotMetadata struct {
	ExpireTime   *string `json:"expireTime"`
	SnapshotName *string `json:"snapshotName"`
	TopicName    *string `json:"topicName"`
}

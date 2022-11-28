package shared

// TopicPartitions
// Response for GetTopicPartitions.
type TopicPartitions struct {
	PartitionCount *string `json:"partitionCount,omitempty"`
}

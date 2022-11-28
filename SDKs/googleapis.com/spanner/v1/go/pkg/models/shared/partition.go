package shared

// Partition
// Information returned for each partition returned in a PartitionResponse.
type Partition struct {
	PartitionToken *string `json:"partitionToken,omitempty"`
}

package shared

type PartitionSpecPartitionKeyEnum string

const (
	PartitionSpecPartitionKeyEnumPartitionKeyUnspecified PartitionSpecPartitionKeyEnum = "PARTITION_KEY_UNSPECIFIED"
	PartitionSpecPartitionKeyEnumReadTime                PartitionSpecPartitionKeyEnum = "READ_TIME"
	PartitionSpecPartitionKeyEnumRequestTime             PartitionSpecPartitionKeyEnum = "REQUEST_TIME"
)

// PartitionSpec
// Specifications of BigQuery partitioned table as export destination.
type PartitionSpec struct {
	PartitionKey *PartitionSpecPartitionKeyEnum `json:"partitionKey,omitempty"`
}

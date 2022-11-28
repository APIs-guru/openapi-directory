package shared

type GoogleCloudDataplexV1ActionInvalidDataPartitionExpectedStructureEnum string

const (
	GoogleCloudDataplexV1ActionInvalidDataPartitionExpectedStructureEnumPartitionStructureUnspecified GoogleCloudDataplexV1ActionInvalidDataPartitionExpectedStructureEnum = "PARTITION_STRUCTURE_UNSPECIFIED"
	GoogleCloudDataplexV1ActionInvalidDataPartitionExpectedStructureEnumConsistentKeys                GoogleCloudDataplexV1ActionInvalidDataPartitionExpectedStructureEnum = "CONSISTENT_KEYS"
	GoogleCloudDataplexV1ActionInvalidDataPartitionExpectedStructureEnumHiveStyleKeys                 GoogleCloudDataplexV1ActionInvalidDataPartitionExpectedStructureEnum = "HIVE_STYLE_KEYS"
)

// GoogleCloudDataplexV1ActionInvalidDataPartition
// Action details for invalid or unsupported partitions detected by discovery.
type GoogleCloudDataplexV1ActionInvalidDataPartition struct {
	ExpectedStructure *GoogleCloudDataplexV1ActionInvalidDataPartitionExpectedStructureEnum `json:"expectedStructure,omitempty"`
}

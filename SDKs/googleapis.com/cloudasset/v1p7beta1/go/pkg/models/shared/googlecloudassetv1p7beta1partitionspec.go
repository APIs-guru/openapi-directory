package shared

type GoogleCloudAssetV1p7beta1PartitionSpecPartitionKeyEnum string

const (
	GoogleCloudAssetV1p7beta1PartitionSpecPartitionKeyEnumPartitionKeyUnspecified GoogleCloudAssetV1p7beta1PartitionSpecPartitionKeyEnum = "PARTITION_KEY_UNSPECIFIED"
	GoogleCloudAssetV1p7beta1PartitionSpecPartitionKeyEnumReadTime                GoogleCloudAssetV1p7beta1PartitionSpecPartitionKeyEnum = "READ_TIME"
	GoogleCloudAssetV1p7beta1PartitionSpecPartitionKeyEnumRequestTime             GoogleCloudAssetV1p7beta1PartitionSpecPartitionKeyEnum = "REQUEST_TIME"
)

// GoogleCloudAssetV1p7beta1PartitionSpec
// Specifications of BigQuery partitioned table as export destination.
type GoogleCloudAssetV1p7beta1PartitionSpec struct {
	PartitionKey *GoogleCloudAssetV1p7beta1PartitionSpecPartitionKeyEnum `json:"partitionKey,omitempty"`
}

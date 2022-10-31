package shared




type GoogleCloudAssetV1BigQueryDestinationPartitionKeyEnum string

const (
    GoogleCloudAssetV1BigQueryDestinationPartitionKeyEnumPartitionKeyUnspecified GoogleCloudAssetV1BigQueryDestinationPartitionKeyEnum = "PARTITION_KEY_UNSPECIFIED"
GoogleCloudAssetV1BigQueryDestinationPartitionKeyEnumRequestTime GoogleCloudAssetV1BigQueryDestinationPartitionKeyEnum = "REQUEST_TIME"
)


type GoogleCloudAssetV1BigQueryDestination struct {
    Dataset *string `json:"dataset,omitempty"`
    PartitionKey *GoogleCloudAssetV1BigQueryDestinationPartitionKeyEnum `json:"partitionKey,omitempty"`
    TablePrefix *string `json:"tablePrefix,omitempty"`
    WriteDisposition *string `json:"writeDisposition,omitempty"`
    
}


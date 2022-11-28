import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleCloudAssetV1p7beta1PartitionSpecPartitionKeyEnum {
    PartitionKeyUnspecified = "PARTITION_KEY_UNSPECIFIED",
    ReadTime = "READ_TIME",
    RequestTime = "REQUEST_TIME"
}
/**
 * Specifications of BigQuery partitioned table as export destination.
**/
export declare class GoogleCloudAssetV1p7beta1PartitionSpec extends SpeakeasyBase {
    partitionKey?: GoogleCloudAssetV1p7beta1PartitionSpecPartitionKeyEnum;
}

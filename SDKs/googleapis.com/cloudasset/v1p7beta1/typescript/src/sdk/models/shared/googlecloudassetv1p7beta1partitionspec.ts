import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleCloudAssetV1p7beta1PartitionSpecPartitionKeyEnum {
    PartitionKeyUnspecified = "PARTITION_KEY_UNSPECIFIED",
    ReadTime = "READ_TIME",
    RequestTime = "REQUEST_TIME"
}


// GoogleCloudAssetV1p7beta1PartitionSpec
/** 
 * Specifications of BigQuery partitioned table as export destination.
**/
export class GoogleCloudAssetV1p7beta1PartitionSpec extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=partitionKey" })
  partitionKey?: GoogleCloudAssetV1p7beta1PartitionSpecPartitionKeyEnum;
}

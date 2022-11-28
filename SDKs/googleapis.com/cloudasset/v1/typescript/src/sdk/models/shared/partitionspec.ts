import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PartitionSpecPartitionKeyEnum {
    PartitionKeyUnspecified = "PARTITION_KEY_UNSPECIFIED",
    ReadTime = "READ_TIME",
    RequestTime = "REQUEST_TIME"
}


// PartitionSpec
/** 
 * Specifications of BigQuery partitioned table as export destination.
**/
export class PartitionSpec extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=partitionKey" })
  partitionKey?: PartitionSpecPartitionKeyEnum;
}

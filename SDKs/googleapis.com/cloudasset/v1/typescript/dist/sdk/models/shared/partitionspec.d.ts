import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PartitionSpecPartitionKeyEnum {
    PartitionKeyUnspecified = "PARTITION_KEY_UNSPECIFIED",
    ReadTime = "READ_TIME",
    RequestTime = "REQUEST_TIME"
}
/**
 * Specifications of BigQuery partitioned table as export destination.
**/
export declare class PartitionSpec extends SpeakeasyBase {
    partitionKey?: PartitionSpecPartitionKeyEnum;
}

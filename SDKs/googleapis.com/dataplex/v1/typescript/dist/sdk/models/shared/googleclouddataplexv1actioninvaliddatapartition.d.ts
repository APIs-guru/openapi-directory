import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleCloudDataplexV1ActionInvalidDataPartitionExpectedStructureEnum {
    PartitionStructureUnspecified = "PARTITION_STRUCTURE_UNSPECIFIED",
    ConsistentKeys = "CONSISTENT_KEYS",
    HiveStyleKeys = "HIVE_STYLE_KEYS"
}
/**
 * Action details for invalid or unsupported partitions detected by discovery.
**/
export declare class GoogleCloudDataplexV1ActionInvalidDataPartition extends SpeakeasyBase {
    expectedStructure?: GoogleCloudDataplexV1ActionInvalidDataPartitionExpectedStructureEnum;
}

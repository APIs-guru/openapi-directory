import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleCloudDataplexV1ActionInvalidDataPartitionExpectedStructureEnum {
    PartitionStructureUnspecified = "PARTITION_STRUCTURE_UNSPECIFIED",
    ConsistentKeys = "CONSISTENT_KEYS",
    HiveStyleKeys = "HIVE_STYLE_KEYS"
}


// GoogleCloudDataplexV1ActionInvalidDataPartition
/** 
 * Action details for invalid or unsupported partitions detected by discovery.
**/
export class GoogleCloudDataplexV1ActionInvalidDataPartition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=expectedStructure" })
  expectedStructure?: GoogleCloudDataplexV1ActionInvalidDataPartitionExpectedStructureEnum;
}

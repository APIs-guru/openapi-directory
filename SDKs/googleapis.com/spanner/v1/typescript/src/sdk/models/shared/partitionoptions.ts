import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PartitionOptions
/** 
 * Options for a PartitionQueryRequest and PartitionReadRequest.
**/
export class PartitionOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=maxPartitions" })
  maxPartitions?: string;

  @SpeakeasyMetadata({ data: "json, name=partitionSizeBytes" })
  partitionSizeBytes?: string;
}

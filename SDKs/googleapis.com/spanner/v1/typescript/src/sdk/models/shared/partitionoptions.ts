import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PartitionOptions
/** 
 * Options for a PartitionQueryRequest and PartitionReadRequest.
**/
export class PartitionOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=maxPartitions" })
  maxPartitions?: string;

  @Metadata({ data: "json, name=partitionSizeBytes" })
  partitionSizeBytes?: string;
}

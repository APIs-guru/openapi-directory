import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Partition
/** 
 * Information returned for each partition returned in a PartitionResponse.
**/
export class Partition extends SpeakeasyBase {
  @Metadata({ data: "json, name=partitionToken" })
  partitionToken?: string;
}

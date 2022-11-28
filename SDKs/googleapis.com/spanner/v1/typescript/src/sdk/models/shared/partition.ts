import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Partition
/** 
 * Information returned for each partition returned in a PartitionResponse.
**/
export class Partition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=partitionToken" })
  partitionToken?: string;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Cursor } from "./cursor";



// PartitionQueryResponse
/** 
 * The response for Firestore.PartitionQuery.
**/
export class PartitionQueryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=partitions", elemType: Cursor })
  partitions?: Cursor[];
}

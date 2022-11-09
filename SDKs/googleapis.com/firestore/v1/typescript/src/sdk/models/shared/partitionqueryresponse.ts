import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Cursor } from "./cursor";


// PartitionQueryResponse
/** 
 * The response for Firestore.PartitionQuery.
**/
export class PartitionQueryResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=partitions", elemType: shared.Cursor })
  partitions?: Cursor[];
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PartitionCursor } from "./partitioncursor";



// ListPartitionCursorsResponse
/** 
 * Response for ListPartitionCursors
**/
export class ListPartitionCursorsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=partitionCursors", elemType: PartitionCursor })
  partitionCursors?: PartitionCursor[];
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PartitionCursor } from "./partitioncursor";


// ListPartitionCursorsResponse
/** 
 * Response for ListPartitionCursors
**/
export class ListPartitionCursorsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=partitionCursors", elemType: shared.PartitionCursor })
  partitionCursors?: PartitionCursor[];
}

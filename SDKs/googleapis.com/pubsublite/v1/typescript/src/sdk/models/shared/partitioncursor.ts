import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Cursor } from "./cursor";


// PartitionCursor
/** 
 * A pair of a Cursor and the partition it is for.
**/
export class PartitionCursor extends SpeakeasyBase {
  @Metadata({ data: "json, name=cursor" })
  cursor?: Cursor;

  @Metadata({ data: "json, name=partition" })
  partition?: string;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Cursor } from "./cursor";



// PartitionCursor
/** 
 * A pair of a Cursor and the partition it is for.
**/
export class PartitionCursor extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cursor" })
  cursor?: Cursor;

  @SpeakeasyMetadata({ data: "json, name=partition" })
  partition?: string;
}

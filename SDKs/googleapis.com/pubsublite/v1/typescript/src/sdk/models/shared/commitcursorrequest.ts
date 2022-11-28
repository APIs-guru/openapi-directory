import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Cursor } from "./cursor";



// CommitCursorRequest
/** 
 * Request for CommitCursor.
**/
export class CommitCursorRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cursor" })
  cursor?: Cursor;

  @SpeakeasyMetadata({ data: "json, name=partition" })
  partition?: string;
}

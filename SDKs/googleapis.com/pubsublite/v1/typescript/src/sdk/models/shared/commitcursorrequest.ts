import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Cursor } from "./cursor";


// CommitCursorRequest
/** 
 * Request for CommitCursor.
**/
export class CommitCursorRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=cursor" })
  cursor?: Cursor;

  @Metadata({ data: "json, name=partition" })
  partition?: string;
}

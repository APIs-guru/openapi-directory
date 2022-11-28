import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { WriteResult } from "./writeresult";



// CommitResponse
/** 
 * The response for Firestore.Commit.
**/
export class CommitResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=commitTime" })
  commitTime?: string;

  @SpeakeasyMetadata({ data: "json, name=writeResults", elemType: WriteResult })
  writeResults?: WriteResult[];
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { WriteResult } from "./writeresult";


// CommitResponse
/** 
 * The response for Firestore.Commit.
**/
export class CommitResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=commitTime" })
  commitTime?: string;

  @Metadata({ data: "json, name=writeResults", elemType: shared.WriteResult })
  writeResults?: WriteResult[];
}

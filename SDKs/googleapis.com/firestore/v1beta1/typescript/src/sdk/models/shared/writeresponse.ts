import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { WriteResult } from "./writeresult";


// WriteResponse
/** 
 * The response for Firestore.Write.
**/
export class WriteResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=commitTime" })
  commitTime?: string;

  @Metadata({ data: "json, name=streamId" })
  streamId?: string;

  @Metadata({ data: "json, name=streamToken" })
  streamToken?: string;

  @Metadata({ data: "json, name=writeResults", elemType: shared.WriteResult })
  writeResults?: WriteResult[];
}

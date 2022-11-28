import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { WriteResult } from "./writeresult";



// WriteResponse
/** 
 * The response for Firestore.Write.
**/
export class WriteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=commitTime" })
  commitTime?: string;

  @SpeakeasyMetadata({ data: "json, name=streamId" })
  streamId?: string;

  @SpeakeasyMetadata({ data: "json, name=streamToken" })
  streamToken?: string;

  @SpeakeasyMetadata({ data: "json, name=writeResults", elemType: WriteResult })
  writeResults?: WriteResult[];
}

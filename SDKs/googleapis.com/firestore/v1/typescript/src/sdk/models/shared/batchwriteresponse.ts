import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Status } from "./status";
import { WriteResult } from "./writeresult";



// BatchWriteResponse
/** 
 * The response from Firestore.BatchWrite.
**/
export class BatchWriteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=status", elemType: Status })
  status?: Status[];

  @SpeakeasyMetadata({ data: "json, name=writeResults", elemType: WriteResult })
  writeResults?: WriteResult[];
}

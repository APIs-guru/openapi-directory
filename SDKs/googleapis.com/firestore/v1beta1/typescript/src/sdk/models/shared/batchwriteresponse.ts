import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Status } from "./status";
import { WriteResult } from "./writeresult";


// BatchWriteResponse
/** 
 * The response from Firestore.BatchWrite.
**/
export class BatchWriteResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=status", elemType: shared.Status })
  status?: Status[];

  @Metadata({ data: "json, name=writeResults", elemType: shared.WriteResult })
  writeResults?: WriteResult[];
}

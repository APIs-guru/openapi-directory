import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RollbackInstanceRequest
/** 
 * Request for rollbacking a notebook instance
**/
export class RollbackInstanceRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=targetSnapshot" })
  targetSnapshot?: string;
}

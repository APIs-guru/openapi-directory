import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RollbackInstanceRequest
/** 
 * Request for rollbacking a notebook instance
**/
export class RollbackInstanceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=targetSnapshot" })
  targetSnapshot?: string;
}

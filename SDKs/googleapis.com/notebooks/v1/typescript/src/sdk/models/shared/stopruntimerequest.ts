import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// StopRuntimeRequest
/** 
 * Request for stopping a Managed Notebook Runtime.
**/
export class StopRuntimeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId?: string;
}

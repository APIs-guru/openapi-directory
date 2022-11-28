import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// StartRuntimeRequest
/** 
 * Request for starting a Managed Notebook Runtime.
**/
export class StartRuntimeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId?: string;
}

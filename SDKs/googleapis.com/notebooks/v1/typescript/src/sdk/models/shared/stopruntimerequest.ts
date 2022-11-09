import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// StopRuntimeRequest
/** 
 * Request for stopping a Managed Notebook Runtime.
**/
export class StopRuntimeRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=requestId" })
  requestId?: string;
}

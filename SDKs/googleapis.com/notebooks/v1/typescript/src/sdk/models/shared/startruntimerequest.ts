import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// StartRuntimeRequest
/** 
 * Request for starting a Managed Notebook Runtime.
**/
export class StartRuntimeRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=requestId" })
  requestId?: string;
}

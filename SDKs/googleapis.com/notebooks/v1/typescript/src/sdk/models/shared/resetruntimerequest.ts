import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ResetRuntimeRequest
/** 
 * Request for resetting a Managed Notebook Runtime.
**/
export class ResetRuntimeRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=requestId" })
  requestId?: string;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ResetRuntimeRequest
/** 
 * Request for resetting a Managed Notebook Runtime.
**/
export class ResetRuntimeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId?: string;
}

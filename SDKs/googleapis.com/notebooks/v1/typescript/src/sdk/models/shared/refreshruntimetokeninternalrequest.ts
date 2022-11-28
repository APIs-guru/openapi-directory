import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RefreshRuntimeTokenInternalRequest
/** 
 * Request for getting a new access token.
**/
export class RefreshRuntimeTokenInternalRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=vmId" })
  vmId?: string;
}

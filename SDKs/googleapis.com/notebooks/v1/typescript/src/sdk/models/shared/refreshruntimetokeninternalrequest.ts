import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RefreshRuntimeTokenInternalRequest
/** 
 * Request for getting a new access token.
**/
export class RefreshRuntimeTokenInternalRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=vmId" })
  vmId?: string;
}

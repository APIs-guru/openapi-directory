import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GetDebugConfigResponse
/** 
 * Response to a get debug configuration request.
**/
export class GetDebugConfigResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=config" })
  config?: string;
}

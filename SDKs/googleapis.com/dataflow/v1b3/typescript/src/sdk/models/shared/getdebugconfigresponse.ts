import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GetDebugConfigResponse
/** 
 * Response to a get debug configuration request.
**/
export class GetDebugConfigResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=config" })
  config?: string;
}

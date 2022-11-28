import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ResponseDebugInfo
/** 
 * Debugging information about the response.
**/
export class ResponseDebugInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=formattedDebugInfo" })
  formattedDebugInfo?: string;
}

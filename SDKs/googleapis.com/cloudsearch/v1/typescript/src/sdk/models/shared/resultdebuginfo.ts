import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ResultDebugInfo
/** 
 * Debugging information about the result.
**/
export class ResultDebugInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=formattedDebugInfo" })
  formattedDebugInfo?: string;
}

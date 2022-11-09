import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ResultDebugInfo
/** 
 * Debugging information about the result.
**/
export class ResultDebugInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=formattedDebugInfo" })
  formattedDebugInfo?: string;
}

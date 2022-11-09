import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ResponseDebugInfo
/** 
 * Debugging information about the response.
**/
export class ResponseDebugInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=enabledExperiments" })
  enabledExperiments?: number[];

  @Metadata({ data: "json, name=formattedDebugInfo" })
  formattedDebugInfo?: string;
}

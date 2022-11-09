import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GenerateConfigReportRequest
/** 
 * Request message for GenerateConfigReport method.
**/
export class GenerateConfigReportRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=newConfig" })
  newConfig?: Map<string, any>;

  @Metadata({ data: "json, name=oldConfig" })
  oldConfig?: Map<string, any>;
}

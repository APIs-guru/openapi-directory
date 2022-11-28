import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GenerateConfigReportRequest
/** 
 * Request message for GenerateConfigReport method.
**/
export class GenerateConfigReportRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=newConfig" })
  newConfig?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=oldConfig" })
  oldConfig?: Map<string, any>;
}

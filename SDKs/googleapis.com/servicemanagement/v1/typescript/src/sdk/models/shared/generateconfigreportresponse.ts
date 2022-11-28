import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ChangeReport } from "./changereport";
import { Diagnostic } from "./diagnostic";



// GenerateConfigReportResponse
/** 
 * Response message for GenerateConfigReport method.
**/
export class GenerateConfigReportResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=changeReports", elemType: ChangeReport })
  changeReports?: ChangeReport[];

  @SpeakeasyMetadata({ data: "json, name=diagnostics", elemType: Diagnostic })
  diagnostics?: Diagnostic[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=serviceName" })
  serviceName?: string;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ChangeReport } from "./changereport";
import { Diagnostic } from "./diagnostic";


// GenerateConfigReportResponse
/** 
 * Response message for GenerateConfigReport method.
**/
export class GenerateConfigReportResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=changeReports", elemType: shared.ChangeReport })
  changeReports?: ChangeReport[];

  @Metadata({ data: "json, name=diagnostics", elemType: shared.Diagnostic })
  diagnostics?: Diagnostic[];

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=serviceName" })
  serviceName?: string;
}

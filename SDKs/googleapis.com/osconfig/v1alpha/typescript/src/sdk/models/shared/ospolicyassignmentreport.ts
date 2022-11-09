import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { OsPolicyAssignmentReportOsPolicyCompliance } from "./ospolicyassignmentreportospolicycompliance";


// OsPolicyAssignmentReport
/** 
 * A report of the OS policy assignment status for a given instance.
**/
export class OsPolicyAssignmentReport extends SpeakeasyBase {
  @Metadata({ data: "json, name=instance" })
  instance?: string;

  @Metadata({ data: "json, name=lastRunId" })
  lastRunId?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=osPolicyAssignment" })
  osPolicyAssignment?: string;

  @Metadata({ data: "json, name=osPolicyCompliances", elemType: shared.OsPolicyAssignmentReportOsPolicyCompliance })
  osPolicyCompliances?: OsPolicyAssignmentReportOsPolicyCompliance[];

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}

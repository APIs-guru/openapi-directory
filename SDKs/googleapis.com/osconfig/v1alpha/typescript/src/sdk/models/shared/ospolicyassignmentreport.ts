import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OsPolicyAssignmentReportOsPolicyCompliance } from "./ospolicyassignmentreportospolicycompliance";



// OsPolicyAssignmentReport
/** 
 * A report of the OS policy assignment status for a given instance.
**/
export class OsPolicyAssignmentReport extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=instance" })
  instance?: string;

  @SpeakeasyMetadata({ data: "json, name=lastRunId" })
  lastRunId?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=osPolicyAssignment" })
  osPolicyAssignment?: string;

  @SpeakeasyMetadata({ data: "json, name=osPolicyCompliances", elemType: OsPolicyAssignmentReportOsPolicyCompliance })
  osPolicyCompliances?: OsPolicyAssignmentReportOsPolicyCompliance[];

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}

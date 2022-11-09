import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { OsPolicyAssignmentReportOsPolicyComplianceOsPolicyResourceComplianceOsPolicyResourceConfigStep } from "./ospolicyassignmentreportospolicycomplianceospolicyresourcecomplianceospolicyresourceconfigstep";
import { OsPolicyAssignmentReportOsPolicyComplianceOsPolicyResourceComplianceExecResourceOutput } from "./ospolicyassignmentreportospolicycomplianceospolicyresourcecomplianceexecresourceoutput";

export enum OsPolicyAssignmentReportOsPolicyComplianceOsPolicyResourceComplianceComplianceStateEnum {
    Unknown = "UNKNOWN"
,    Compliant = "COMPLIANT"
,    NonCompliant = "NON_COMPLIANT"
}


// OsPolicyAssignmentReportOsPolicyComplianceOsPolicyResourceCompliance
/** 
 * Compliance data for an OS policy resource.
**/
export class OsPolicyAssignmentReportOsPolicyComplianceOsPolicyResourceCompliance extends SpeakeasyBase {
  @Metadata({ data: "json, name=complianceState" })
  complianceState?: OsPolicyAssignmentReportOsPolicyComplianceOsPolicyResourceComplianceComplianceStateEnum;

  @Metadata({ data: "json, name=complianceStateReason" })
  complianceStateReason?: string;

  @Metadata({ data: "json, name=configSteps", elemType: shared.OsPolicyAssignmentReportOsPolicyComplianceOsPolicyResourceComplianceOsPolicyResourceConfigStep })
  configSteps?: OsPolicyAssignmentReportOsPolicyComplianceOsPolicyResourceComplianceOsPolicyResourceConfigStep[];

  @Metadata({ data: "json, name=execResourceOutput" })
  execResourceOutput?: OsPolicyAssignmentReportOsPolicyComplianceOsPolicyResourceComplianceExecResourceOutput;

  @Metadata({ data: "json, name=osPolicyResourceId" })
  osPolicyResourceId?: string;
}

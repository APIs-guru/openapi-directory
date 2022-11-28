import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OsPolicyAssignmentReportOsPolicyComplianceOsPolicyResourceComplianceOsPolicyResourceConfigStep } from "./ospolicyassignmentreportospolicycomplianceospolicyresourcecomplianceospolicyresourceconfigstep";
import { OsPolicyAssignmentReportOsPolicyComplianceOsPolicyResourceComplianceExecResourceOutput } from "./ospolicyassignmentreportospolicycomplianceospolicyresourcecomplianceexecresourceoutput";


export enum OsPolicyAssignmentReportOsPolicyComplianceOsPolicyResourceComplianceComplianceStateEnum {
    Unknown = "UNKNOWN",
    Compliant = "COMPLIANT",
    NonCompliant = "NON_COMPLIANT"
}


// OsPolicyAssignmentReportOsPolicyComplianceOsPolicyResourceCompliance
/** 
 * Compliance data for an OS policy resource.
**/
export class OsPolicyAssignmentReportOsPolicyComplianceOsPolicyResourceCompliance extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=complianceState" })
  complianceState?: OsPolicyAssignmentReportOsPolicyComplianceOsPolicyResourceComplianceComplianceStateEnum;

  @SpeakeasyMetadata({ data: "json, name=complianceStateReason" })
  complianceStateReason?: string;

  @SpeakeasyMetadata({ data: "json, name=configSteps", elemType: OsPolicyAssignmentReportOsPolicyComplianceOsPolicyResourceComplianceOsPolicyResourceConfigStep })
  configSteps?: OsPolicyAssignmentReportOsPolicyComplianceOsPolicyResourceComplianceOsPolicyResourceConfigStep[];

  @SpeakeasyMetadata({ data: "json, name=execResourceOutput" })
  execResourceOutput?: OsPolicyAssignmentReportOsPolicyComplianceOsPolicyResourceComplianceExecResourceOutput;

  @SpeakeasyMetadata({ data: "json, name=osPolicyResourceId" })
  osPolicyResourceId?: string;
}

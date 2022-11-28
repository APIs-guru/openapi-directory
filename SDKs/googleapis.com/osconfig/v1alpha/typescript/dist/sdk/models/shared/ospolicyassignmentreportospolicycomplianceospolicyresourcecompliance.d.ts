import { SpeakeasyBase } from "../../../internal/utils";
import { OsPolicyAssignmentReportOsPolicyComplianceOsPolicyResourceComplianceOsPolicyResourceConfigStep } from "./ospolicyassignmentreportospolicycomplianceospolicyresourcecomplianceospolicyresourceconfigstep";
import { OsPolicyAssignmentReportOsPolicyComplianceOsPolicyResourceComplianceExecResourceOutput } from "./ospolicyassignmentreportospolicycomplianceospolicyresourcecomplianceexecresourceoutput";
export declare enum OsPolicyAssignmentReportOsPolicyComplianceOsPolicyResourceComplianceComplianceStateEnum {
    Unknown = "UNKNOWN",
    Compliant = "COMPLIANT",
    NonCompliant = "NON_COMPLIANT"
}
/**
 * Compliance data for an OS policy resource.
**/
export declare class OsPolicyAssignmentReportOsPolicyComplianceOsPolicyResourceCompliance extends SpeakeasyBase {
    complianceState?: OsPolicyAssignmentReportOsPolicyComplianceOsPolicyResourceComplianceComplianceStateEnum;
    complianceStateReason?: string;
    configSteps?: OsPolicyAssignmentReportOsPolicyComplianceOsPolicyResourceComplianceOsPolicyResourceConfigStep[];
    execResourceOutput?: OsPolicyAssignmentReportOsPolicyComplianceOsPolicyResourceComplianceExecResourceOutput;
    osPolicyResourceId?: string;
}

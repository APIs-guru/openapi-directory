import { SpeakeasyBase } from "../../../internal/utils";
import { OsPolicyAssignmentReportOsPolicyComplianceOsPolicyResourceCompliance } from "./ospolicyassignmentreportospolicycomplianceospolicyresourcecompliance";
export declare enum OsPolicyAssignmentReportOsPolicyComplianceComplianceStateEnum {
    Unknown = "UNKNOWN",
    Compliant = "COMPLIANT",
    NonCompliant = "NON_COMPLIANT"
}
/**
 * Compliance data for an OS policy
**/
export declare class OsPolicyAssignmentReportOsPolicyCompliance extends SpeakeasyBase {
    complianceState?: OsPolicyAssignmentReportOsPolicyComplianceComplianceStateEnum;
    complianceStateReason?: string;
    osPolicyId?: string;
    osPolicyResourceCompliances?: OsPolicyAssignmentReportOsPolicyComplianceOsPolicyResourceCompliance[];
}

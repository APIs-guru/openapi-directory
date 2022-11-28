import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OsPolicyAssignmentReportOsPolicyComplianceOsPolicyResourceCompliance } from "./ospolicyassignmentreportospolicycomplianceospolicyresourcecompliance";


export enum OsPolicyAssignmentReportOsPolicyComplianceComplianceStateEnum {
    Unknown = "UNKNOWN",
    Compliant = "COMPLIANT",
    NonCompliant = "NON_COMPLIANT"
}


// OsPolicyAssignmentReportOsPolicyCompliance
/** 
 * Compliance data for an OS policy
**/
export class OsPolicyAssignmentReportOsPolicyCompliance extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=complianceState" })
  complianceState?: OsPolicyAssignmentReportOsPolicyComplianceComplianceStateEnum;

  @SpeakeasyMetadata({ data: "json, name=complianceStateReason" })
  complianceStateReason?: string;

  @SpeakeasyMetadata({ data: "json, name=osPolicyId" })
  osPolicyId?: string;

  @SpeakeasyMetadata({ data: "json, name=osPolicyResourceCompliances", elemType: OsPolicyAssignmentReportOsPolicyComplianceOsPolicyResourceCompliance })
  osPolicyResourceCompliances?: OsPolicyAssignmentReportOsPolicyComplianceOsPolicyResourceCompliance[];
}

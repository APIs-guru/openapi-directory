import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { OsPolicyAssignmentReportOsPolicyComplianceOsPolicyResourceCompliance } from "./ospolicyassignmentreportospolicycomplianceospolicyresourcecompliance";

export enum OsPolicyAssignmentReportOsPolicyComplianceComplianceStateEnum {
    Unknown = "UNKNOWN"
,    Compliant = "COMPLIANT"
,    NonCompliant = "NON_COMPLIANT"
}


// OsPolicyAssignmentReportOsPolicyCompliance
/** 
 * Compliance data for an OS policy
**/
export class OsPolicyAssignmentReportOsPolicyCompliance extends SpeakeasyBase {
  @Metadata({ data: "json, name=complianceState" })
  complianceState?: OsPolicyAssignmentReportOsPolicyComplianceComplianceStateEnum;

  @Metadata({ data: "json, name=complianceStateReason" })
  complianceStateReason?: string;

  @Metadata({ data: "json, name=osPolicyId" })
  osPolicyId?: string;

  @Metadata({ data: "json, name=osPolicyResourceCompliances", elemType: shared.OsPolicyAssignmentReportOsPolicyComplianceOsPolicyResourceCompliance })
  osPolicyResourceCompliances?: OsPolicyAssignmentReportOsPolicyComplianceOsPolicyResourceCompliance[];
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { OsPolicyResourceCompliance } from "./ospolicyresourcecompliance";

export enum InstanceOsPoliciesComplianceOsPolicyComplianceStateEnum {
    OsPolicyComplianceStateUnspecified = "OS_POLICY_COMPLIANCE_STATE_UNSPECIFIED"
,    Compliant = "COMPLIANT"
,    NonCompliant = "NON_COMPLIANT"
,    Unknown = "UNKNOWN"
,    NoOsPoliciesApplicable = "NO_OS_POLICIES_APPLICABLE"
}


// InstanceOsPoliciesComplianceOsPolicyCompliance
/** 
 * Compliance data for an OS policy
**/
export class InstanceOsPoliciesComplianceOsPolicyCompliance extends SpeakeasyBase {
  @Metadata({ data: "json, name=osPolicyAssignment" })
  osPolicyAssignment?: string;

  @Metadata({ data: "json, name=osPolicyId" })
  osPolicyId?: string;

  @Metadata({ data: "json, name=osPolicyResourceCompliances", elemType: shared.OsPolicyResourceCompliance })
  osPolicyResourceCompliances?: OsPolicyResourceCompliance[];

  @Metadata({ data: "json, name=state" })
  state?: InstanceOsPoliciesComplianceOsPolicyComplianceStateEnum;
}

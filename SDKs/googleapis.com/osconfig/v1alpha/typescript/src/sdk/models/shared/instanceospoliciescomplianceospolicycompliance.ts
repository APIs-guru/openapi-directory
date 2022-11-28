import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OsPolicyResourceCompliance } from "./ospolicyresourcecompliance";


export enum InstanceOsPoliciesComplianceOsPolicyComplianceStateEnum {
    OsPolicyComplianceStateUnspecified = "OS_POLICY_COMPLIANCE_STATE_UNSPECIFIED",
    Compliant = "COMPLIANT",
    NonCompliant = "NON_COMPLIANT",
    Unknown = "UNKNOWN",
    NoOsPoliciesApplicable = "NO_OS_POLICIES_APPLICABLE"
}


// InstanceOsPoliciesComplianceOsPolicyCompliance
/** 
 * Compliance data for an OS policy
**/
export class InstanceOsPoliciesComplianceOsPolicyCompliance extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=osPolicyAssignment" })
  osPolicyAssignment?: string;

  @SpeakeasyMetadata({ data: "json, name=osPolicyId" })
  osPolicyId?: string;

  @SpeakeasyMetadata({ data: "json, name=osPolicyResourceCompliances", elemType: OsPolicyResourceCompliance })
  osPolicyResourceCompliances?: OsPolicyResourceCompliance[];

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: InstanceOsPoliciesComplianceOsPolicyComplianceStateEnum;
}

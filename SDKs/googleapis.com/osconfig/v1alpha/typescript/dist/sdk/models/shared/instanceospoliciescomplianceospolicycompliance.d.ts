import { SpeakeasyBase } from "../../../internal/utils";
import { OsPolicyResourceCompliance } from "./ospolicyresourcecompliance";
export declare enum InstanceOsPoliciesComplianceOsPolicyComplianceStateEnum {
    OsPolicyComplianceStateUnspecified = "OS_POLICY_COMPLIANCE_STATE_UNSPECIFIED",
    Compliant = "COMPLIANT",
    NonCompliant = "NON_COMPLIANT",
    Unknown = "UNKNOWN",
    NoOsPoliciesApplicable = "NO_OS_POLICIES_APPLICABLE"
}
/**
 * Compliance data for an OS policy
**/
export declare class InstanceOsPoliciesComplianceOsPolicyCompliance extends SpeakeasyBase {
    osPolicyAssignment?: string;
    osPolicyId?: string;
    osPolicyResourceCompliances?: OsPolicyResourceCompliance[];
    state?: InstanceOsPoliciesComplianceOsPolicyComplianceStateEnum;
}

import { SpeakeasyBase } from "../../../internal/utils";
import { InstanceOsPoliciesComplianceOsPolicyCompliance } from "./instanceospoliciescomplianceospolicycompliance";
export declare enum InstanceOsPoliciesComplianceStateEnum {
    OsPolicyComplianceStateUnspecified = "OS_POLICY_COMPLIANCE_STATE_UNSPECIFIED",
    Compliant = "COMPLIANT",
    NonCompliant = "NON_COMPLIANT",
    Unknown = "UNKNOWN",
    NoOsPoliciesApplicable = "NO_OS_POLICIES_APPLICABLE"
}
/**
 * This API resource represents the OS policies compliance data for a Compute Engine virtual machine (VM) instance at a given point in time. A Compute Engine VM can have multiple OS policy assignments, and each assignment can have multiple OS policies. As a result, multiple OS policies could be applied to a single VM. You can use this API resource to determine both the compliance state of your VM as well as the compliance state of an individual OS policy. For more information, see [View compliance](https://cloud.google.com/compute/docs/os-configuration-management/view-compliance).
**/
export declare class InstanceOsPoliciesCompliance extends SpeakeasyBase {
    detailedState?: string;
    detailedStateReason?: string;
    instance?: string;
    lastComplianceCheckTime?: string;
    lastComplianceRunId?: string;
    name?: string;
    osPolicyCompliances?: InstanceOsPoliciesComplianceOsPolicyCompliance[];
    state?: InstanceOsPoliciesComplianceStateEnum;
}

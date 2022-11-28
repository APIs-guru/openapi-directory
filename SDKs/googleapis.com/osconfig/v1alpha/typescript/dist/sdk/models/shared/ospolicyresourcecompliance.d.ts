import { SpeakeasyBase } from "../../../internal/utils";
import { OsPolicyResourceConfigStep } from "./ospolicyresourceconfigstep";
import { OsPolicyResourceComplianceExecResourceOutput } from "./ospolicyresourcecomplianceexecresourceoutput";
export declare enum OsPolicyResourceComplianceStateEnum {
    OsPolicyComplianceStateUnspecified = "OS_POLICY_COMPLIANCE_STATE_UNSPECIFIED",
    Compliant = "COMPLIANT",
    NonCompliant = "NON_COMPLIANT",
    Unknown = "UNKNOWN",
    NoOsPoliciesApplicable = "NO_OS_POLICIES_APPLICABLE"
}
/**
 * Compliance data for an OS policy resource.
**/
export declare class OsPolicyResourceCompliance extends SpeakeasyBase {
    configSteps?: OsPolicyResourceConfigStep[];
    execResourceOutput?: OsPolicyResourceComplianceExecResourceOutput;
    osPolicyResourceId?: string;
    state?: OsPolicyResourceComplianceStateEnum;
}

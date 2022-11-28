import { SpeakeasyBase } from "../../../internal/utils";
export declare enum OsPolicyAssignmentReportOsPolicyComplianceOsPolicyResourceComplianceOsPolicyResourceConfigStepTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    Validation = "VALIDATION",
    DesiredStateCheck = "DESIRED_STATE_CHECK",
    DesiredStateEnforcement = "DESIRED_STATE_ENFORCEMENT",
    DesiredStateCheckPostEnforcement = "DESIRED_STATE_CHECK_POST_ENFORCEMENT"
}
/**
 * Step performed by the OS Config agent for configuring an `OSPolicy` resource to its desired state.
**/
export declare class OsPolicyAssignmentReportOsPolicyComplianceOsPolicyResourceComplianceOsPolicyResourceConfigStep extends SpeakeasyBase {
    errorMessage?: string;
    type?: OsPolicyAssignmentReportOsPolicyComplianceOsPolicyResourceComplianceOsPolicyResourceConfigStepTypeEnum;
}

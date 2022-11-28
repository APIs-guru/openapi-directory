import { SpeakeasyBase } from "../../../internal/utils";
export declare enum OsPolicyResourceConfigStepOutcomeEnum {
    OutcomeUnspecified = "OUTCOME_UNSPECIFIED",
    Succeeded = "SUCCEEDED",
    Failed = "FAILED"
}
export declare enum OsPolicyResourceConfigStepTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    Validation = "VALIDATION",
    DesiredStateCheck = "DESIRED_STATE_CHECK",
    DesiredStateEnforcement = "DESIRED_STATE_ENFORCEMENT",
    DesiredStateCheckPostEnforcement = "DESIRED_STATE_CHECK_POST_ENFORCEMENT"
}
/**
 * Step performed by the OS Config agent for configuring an `OSPolicyResource` to its desired state.
**/
export declare class OsPolicyResourceConfigStep extends SpeakeasyBase {
    errorMessage?: string;
    outcome?: OsPolicyResourceConfigStepOutcomeEnum;
    type?: OsPolicyResourceConfigStepTypeEnum;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum OsPolicyResourceConfigStepOutcomeEnum {
    OutcomeUnspecified = "OUTCOME_UNSPECIFIED",
    Succeeded = "SUCCEEDED",
    Failed = "FAILED"
}

export enum OsPolicyResourceConfigStepTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    Validation = "VALIDATION",
    DesiredStateCheck = "DESIRED_STATE_CHECK",
    DesiredStateEnforcement = "DESIRED_STATE_ENFORCEMENT",
    DesiredStateCheckPostEnforcement = "DESIRED_STATE_CHECK_POST_ENFORCEMENT"
}


// OsPolicyResourceConfigStep
/** 
 * Step performed by the OS Config agent for configuring an `OSPolicyResource` to its desired state.
**/
export class OsPolicyResourceConfigStep extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errorMessage" })
  errorMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=outcome" })
  outcome?: OsPolicyResourceConfigStepOutcomeEnum;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: OsPolicyResourceConfigStepTypeEnum;
}

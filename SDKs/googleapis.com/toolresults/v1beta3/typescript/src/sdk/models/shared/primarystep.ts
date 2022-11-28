import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IndividualOutcome } from "./individualoutcome";


export enum PrimaryStepRollUpEnum {
    Unset = "unset",
    Success = "success",
    Failure = "failure",
    Inconclusive = "inconclusive",
    Skipped = "skipped",
    Flaky = "flaky"
}


// PrimaryStep
/** 
 * Stores rollup test status of multiple steps that were run as a group and outcome of each individual step.
**/
export class PrimaryStep extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=individualOutcome", elemType: IndividualOutcome })
  individualOutcome?: IndividualOutcome[];

  @SpeakeasyMetadata({ data: "json, name=rollUp" })
  rollUp?: PrimaryStepRollUpEnum;
}

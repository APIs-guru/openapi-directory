import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Duration } from "./duration";


export enum IndividualOutcomeOutcomeSummaryEnum {
    Unset = "unset",
    Success = "success",
    Failure = "failure",
    Inconclusive = "inconclusive",
    Skipped = "skipped",
    Flaky = "flaky"
}


// IndividualOutcome
/** 
 * Step Id and outcome of each individual step that was run as a group with other steps with the same configuration.
**/
export class IndividualOutcome extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=multistepNumber" })
  multistepNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=outcomeSummary" })
  outcomeSummary?: IndividualOutcomeOutcomeSummaryEnum;

  @SpeakeasyMetadata({ data: "json, name=runDuration" })
  runDuration?: Duration;

  @SpeakeasyMetadata({ data: "json, name=stepId" })
  stepId?: string;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Duration } from "./duration";

export enum IndividualOutcomeOutcomeSummaryEnum {
    Unset = "unset"
,    Success = "success"
,    Failure = "failure"
,    Inconclusive = "inconclusive"
,    Skipped = "skipped"
,    Flaky = "flaky"
}


// IndividualOutcome
/** 
 * Step Id and outcome of each individual step that was run as a group with other steps with the same configuration.
**/
export class IndividualOutcome extends SpeakeasyBase {
  @Metadata({ data: "json, name=multistepNumber" })
  multistepNumber?: number;

  @Metadata({ data: "json, name=outcomeSummary" })
  outcomeSummary?: IndividualOutcomeOutcomeSummaryEnum;

  @Metadata({ data: "json, name=runDuration" })
  runDuration?: Duration;

  @Metadata({ data: "json, name=stepId" })
  stepId?: string;
}

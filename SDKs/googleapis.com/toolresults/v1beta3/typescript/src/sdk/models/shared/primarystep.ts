import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { IndividualOutcome } from "./individualoutcome";

export enum PrimaryStepRollUpEnum {
    Unset = "unset"
,    Success = "success"
,    Failure = "failure"
,    Inconclusive = "inconclusive"
,    Skipped = "skipped"
,    Flaky = "flaky"
}


// PrimaryStep
/** 
 * Stores rollup test status of multiple steps that were run as a group and outcome of each individual step.
**/
export class PrimaryStep extends SpeakeasyBase {
  @Metadata({ data: "json, name=individualOutcome", elemType: shared.IndividualOutcome })
  individualOutcome?: IndividualOutcome[];

  @Metadata({ data: "json, name=rollUp" })
  rollUp?: PrimaryStepRollUpEnum;
}

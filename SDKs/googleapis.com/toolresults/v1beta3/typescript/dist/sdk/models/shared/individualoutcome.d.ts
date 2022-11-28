import { SpeakeasyBase } from "../../../internal/utils";
import { Duration } from "./duration";
export declare enum IndividualOutcomeOutcomeSummaryEnum {
    Unset = "unset",
    Success = "success",
    Failure = "failure",
    Inconclusive = "inconclusive",
    Skipped = "skipped",
    Flaky = "flaky"
}
/**
 * Step Id and outcome of each individual step that was run as a group with other steps with the same configuration.
**/
export declare class IndividualOutcome extends SpeakeasyBase {
    multistepNumber?: number;
    outcomeSummary?: IndividualOutcomeOutcomeSummaryEnum;
    runDuration?: Duration;
    stepId?: string;
}

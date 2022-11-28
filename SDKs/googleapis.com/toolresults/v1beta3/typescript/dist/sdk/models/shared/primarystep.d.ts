import { SpeakeasyBase } from "../../../internal/utils";
import { IndividualOutcome } from "./individualoutcome";
export declare enum PrimaryStepRollUpEnum {
    Unset = "unset",
    Success = "success",
    Failure = "failure",
    Inconclusive = "inconclusive",
    Skipped = "skipped",
    Flaky = "flaky"
}
/**
 * Stores rollup test status of multiple steps that were run as a group and outcome of each individual step.
**/
export declare class PrimaryStep extends SpeakeasyBase {
    individualOutcome?: IndividualOutcome[];
    rollUp?: PrimaryStepRollUpEnum;
}

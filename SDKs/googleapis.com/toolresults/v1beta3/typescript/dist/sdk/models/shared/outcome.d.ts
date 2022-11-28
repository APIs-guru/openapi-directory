import { SpeakeasyBase } from "../../../internal/utils";
import { FailureDetail } from "./failuredetail";
import { InconclusiveDetail } from "./inconclusivedetail";
import { SkippedDetail } from "./skippeddetail";
import { SuccessDetail } from "./successdetail";
export declare enum OutcomeSummaryEnum {
    Unset = "unset",
    Success = "success",
    Failure = "failure",
    Inconclusive = "inconclusive",
    Skipped = "skipped",
    Flaky = "flaky"
}
/**
 * Interprets a result so that humans and machines can act on it.
**/
export declare class Outcome extends SpeakeasyBase {
    failureDetail?: FailureDetail;
    inconclusiveDetail?: InconclusiveDetail;
    skippedDetail?: SkippedDetail;
    successDetail?: SuccessDetail;
    summary?: OutcomeSummaryEnum;
}

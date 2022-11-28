import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FailureDetail } from "./failuredetail";
import { InconclusiveDetail } from "./inconclusivedetail";
import { SkippedDetail } from "./skippeddetail";
import { SuccessDetail } from "./successdetail";


export enum OutcomeSummaryEnum {
    Unset = "unset",
    Success = "success",
    Failure = "failure",
    Inconclusive = "inconclusive",
    Skipped = "skipped",
    Flaky = "flaky"
}


// Outcome
/** 
 * Interprets a result so that humans and machines can act on it.
**/
export class Outcome extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=failureDetail" })
  failureDetail?: FailureDetail;

  @SpeakeasyMetadata({ data: "json, name=inconclusiveDetail" })
  inconclusiveDetail?: InconclusiveDetail;

  @SpeakeasyMetadata({ data: "json, name=skippedDetail" })
  skippedDetail?: SkippedDetail;

  @SpeakeasyMetadata({ data: "json, name=successDetail" })
  successDetail?: SuccessDetail;

  @SpeakeasyMetadata({ data: "json, name=summary" })
  summary?: OutcomeSummaryEnum;
}

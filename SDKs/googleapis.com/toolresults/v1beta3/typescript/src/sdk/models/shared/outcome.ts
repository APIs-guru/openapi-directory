import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FailureDetail } from "./failuredetail";
import { InconclusiveDetail } from "./inconclusivedetail";
import { SkippedDetail } from "./skippeddetail";
import { SuccessDetail } from "./successdetail";

export enum OutcomeSummaryEnum {
    Unset = "unset"
,    Success = "success"
,    Failure = "failure"
,    Inconclusive = "inconclusive"
,    Skipped = "skipped"
,    Flaky = "flaky"
}


// Outcome
/** 
 * Interprets a result so that humans and machines can act on it.
**/
export class Outcome extends SpeakeasyBase {
  @Metadata({ data: "json, name=failureDetail" })
  failureDetail?: FailureDetail;

  @Metadata({ data: "json, name=inconclusiveDetail" })
  inconclusiveDetail?: InconclusiveDetail;

  @Metadata({ data: "json, name=skippedDetail" })
  skippedDetail?: SkippedDetail;

  @Metadata({ data: "json, name=successDetail" })
  successDetail?: SuccessDetail;

  @Metadata({ data: "json, name=summary" })
  summary?: OutcomeSummaryEnum;
}

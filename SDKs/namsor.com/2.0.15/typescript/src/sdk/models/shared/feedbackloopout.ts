import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class FeedbackLoopOut extends SpeakeasyBase {
  @Metadata({ data: "json, name=feedbackCredits" })
  feedbackCredits?: number;
}

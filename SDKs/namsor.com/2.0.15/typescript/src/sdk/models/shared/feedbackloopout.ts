import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class FeedbackLoopOut extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=feedbackCredits" })
  feedbackCredits?: number;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// FeedbackLoop
/** 
 * [Feedback loop](https://support.google.com/mail/answer/6254652) identifier information.
**/
export class FeedbackLoop extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=spamRatio" })
  spamRatio?: number;
}

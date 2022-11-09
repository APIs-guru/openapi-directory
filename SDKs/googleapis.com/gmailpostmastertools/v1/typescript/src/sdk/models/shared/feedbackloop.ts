import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// FeedbackLoop
/** 
 * [Feedback loop](https://support.google.com/mail/answer/6254652) identifier information.
**/
export class FeedbackLoop extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=spamRatio" })
  spamRatio?: number;
}

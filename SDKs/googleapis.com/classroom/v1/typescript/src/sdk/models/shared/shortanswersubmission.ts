import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ShortAnswerSubmission
/** 
 * Student work for a short answer question.
**/
export class ShortAnswerSubmission extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=answer" })
  answer?: string;
}

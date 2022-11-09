import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ShortAnswerSubmission
/** 
 * Student work for a short answer question.
**/
export class ShortAnswerSubmission extends SpeakeasyBase {
  @Metadata({ data: "json, name=answer" })
  answer?: string;
}

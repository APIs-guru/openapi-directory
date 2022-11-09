import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// MultipleChoiceSubmission
/** 
 * Student work for a multiple-choice question.
**/
export class MultipleChoiceSubmission extends SpeakeasyBase {
  @Metadata({ data: "json, name=answer" })
  answer?: string;
}

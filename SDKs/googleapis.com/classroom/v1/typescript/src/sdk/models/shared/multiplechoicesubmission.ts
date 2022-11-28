import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// MultipleChoiceSubmission
/** 
 * Student work for a multiple-choice question.
**/
export class MultipleChoiceSubmission extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=answer" })
  answer?: string;
}

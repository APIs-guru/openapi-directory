import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AnswerInput } from "./answer";



// UpsertAnswerRequestInput
/** 
 * Request message for QuestionsAndAnswers.UpsertAnswer
**/
export class UpsertAnswerRequestInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=answer" })
  answer?: AnswerInput;
}

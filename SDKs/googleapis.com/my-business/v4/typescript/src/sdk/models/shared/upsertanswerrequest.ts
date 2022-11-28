import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Answer } from "./answer";



// UpsertAnswerRequest
/** 
 * Request message for QuestionsAndAnswers.UpsertAnswer
**/
export class UpsertAnswerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=answer" })
  answer?: Answer;
}

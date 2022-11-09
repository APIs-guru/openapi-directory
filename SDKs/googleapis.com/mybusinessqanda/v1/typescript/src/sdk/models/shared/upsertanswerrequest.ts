import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Answer } from "./answer";


// UpsertAnswerRequest
/** 
 * Request message for QuestionsAndAnswers.UpsertAnswer
**/
export class UpsertAnswerRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=answer" })
  answer?: Answer;
}

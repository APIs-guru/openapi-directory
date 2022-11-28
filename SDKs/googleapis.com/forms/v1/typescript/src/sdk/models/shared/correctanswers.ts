import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CorrectAnswer } from "./correctanswer";



// CorrectAnswers
/** 
 * The answer key for a question.
**/
export class CorrectAnswers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=answers", elemType: CorrectAnswer })
  answers?: CorrectAnswer[];
}

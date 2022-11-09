import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CorrectAnswer } from "./correctanswer";


// CorrectAnswers
/** 
 * The answer key for a question.
**/
export class CorrectAnswers extends SpeakeasyBase {
  @Metadata({ data: "json, name=answers", elemType: shared.CorrectAnswer })
  answers?: CorrectAnswer[];
}

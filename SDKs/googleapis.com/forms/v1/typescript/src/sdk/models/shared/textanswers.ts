import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TextAnswer } from "./textanswer";


// TextAnswers
/** 
 * A question's answers as text.
**/
export class TextAnswers extends SpeakeasyBase {
  @Metadata({ data: "json, name=answers", elemType: shared.TextAnswer })
  answers?: TextAnswer[];
}

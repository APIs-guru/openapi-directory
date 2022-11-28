import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TextAnswer } from "./textanswer";



// TextAnswers
/** 
 * A question's answers as text.
**/
export class TextAnswers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=answers", elemType: TextAnswer })
  answers?: TextAnswer[];
}

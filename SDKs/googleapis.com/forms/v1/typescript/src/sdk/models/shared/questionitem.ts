import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Image } from "./image";
import { Question } from "./question";


// QuestionItem
/** 
 * A form item containing a single question.
**/
export class QuestionItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=image" })
  image?: Image;

  @Metadata({ data: "json, name=question" })
  question?: Question;
}

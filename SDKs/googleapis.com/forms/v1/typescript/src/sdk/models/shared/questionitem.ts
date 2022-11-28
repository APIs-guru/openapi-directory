import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ImageInput } from "./image";
import { QuestionInput } from "./question";
import { Image } from "./image";
import { Question } from "./question";



// QuestionItemInput
/** 
 * A form item containing a single question.
**/
export class QuestionItemInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=image" })
  image?: ImageInput;

  @SpeakeasyMetadata({ data: "json, name=question" })
  question?: QuestionInput;
}


// QuestionItem
/** 
 * A form item containing a single question.
**/
export class QuestionItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=image" })
  image?: Image;

  @SpeakeasyMetadata({ data: "json, name=question" })
  question?: Question;
}

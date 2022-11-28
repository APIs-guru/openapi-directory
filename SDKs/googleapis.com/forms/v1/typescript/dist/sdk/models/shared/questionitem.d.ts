import { SpeakeasyBase } from "../../../internal/utils";
import { ImageInput } from "./image";
import { QuestionInput } from "./question";
import { Image } from "./image";
import { Question } from "./question";
/**
 * A form item containing a single question.
**/
export declare class QuestionItemInput extends SpeakeasyBase {
    image?: ImageInput;
    question?: QuestionInput;
}
/**
 * A form item containing a single question.
**/
export declare class QuestionItem extends SpeakeasyBase {
    image?: Image;
    question?: Question;
}

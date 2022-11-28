import { SpeakeasyBase } from "../../../internal/utils";
import { GridInput } from "./grid";
import { ImageInput } from "./image";
import { QuestionInput } from "./question";
import { Grid } from "./grid";
import { Image } from "./image";
import { Question } from "./question";
/**
 * Defines a question that comprises multiple questions grouped together.
**/
export declare class QuestionGroupItemInput extends SpeakeasyBase {
    grid?: GridInput;
    image?: ImageInput;
    questions?: QuestionInput[];
}
/**
 * Defines a question that comprises multiple questions grouped together.
**/
export declare class QuestionGroupItem extends SpeakeasyBase {
    grid?: Grid;
    image?: Image;
    questions?: Question[];
}

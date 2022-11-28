import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GridInput } from "./grid";
import { ImageInput } from "./image";
import { QuestionInput } from "./question";
import { Grid } from "./grid";
import { Image } from "./image";
import { Question } from "./question";



// QuestionGroupItemInput
/** 
 * Defines a question that comprises multiple questions grouped together.
**/
export class QuestionGroupItemInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=grid" })
  grid?: GridInput;

  @SpeakeasyMetadata({ data: "json, name=image" })
  image?: ImageInput;

  @SpeakeasyMetadata({ data: "json, name=questions", elemType: QuestionInput })
  questions?: QuestionInput[];
}


// QuestionGroupItem
/** 
 * Defines a question that comprises multiple questions grouped together.
**/
export class QuestionGroupItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=grid" })
  grid?: Grid;

  @SpeakeasyMetadata({ data: "json, name=image" })
  image?: Image;

  @SpeakeasyMetadata({ data: "json, name=questions", elemType: Question })
  questions?: Question[];
}

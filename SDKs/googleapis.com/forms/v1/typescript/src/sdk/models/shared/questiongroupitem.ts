import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Grid } from "./grid";
import { Image } from "./image";
import { Question } from "./question";


// QuestionGroupItem
/** 
 * Defines a question that comprises multiple questions grouped together.
**/
export class QuestionGroupItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=grid" })
  grid?: Grid;

  @Metadata({ data: "json, name=image" })
  image?: Image;

  @Metadata({ data: "json, name=questions", elemType: shared.Question })
  questions?: Question[];
}

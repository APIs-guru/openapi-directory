import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TextQuestion
/** 
 * A text-based question.
**/
export class TextQuestion extends SpeakeasyBase {
  @Metadata({ data: "json, name=paragraph" })
  paragraph?: boolean;
}

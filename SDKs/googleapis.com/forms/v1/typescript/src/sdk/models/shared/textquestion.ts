import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TextQuestion
/** 
 * A text-based question.
**/
export class TextQuestion extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=paragraph" })
  paragraph?: boolean;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TextAnswer
/** 
 * An answer to a question represented as text.
**/
export class TextAnswer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}

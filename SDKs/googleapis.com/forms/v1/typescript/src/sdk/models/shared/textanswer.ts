import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TextAnswer
/** 
 * An answer to a question represented as text.
**/
export class TextAnswer extends SpeakeasyBase {
  @Metadata({ data: "json, name=value" })
  value?: string;
}

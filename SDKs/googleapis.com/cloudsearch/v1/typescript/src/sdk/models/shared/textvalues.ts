import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TextValues
/** 
 * List of text values.
**/
export class TextValues extends SpeakeasyBase {
  @Metadata({ data: "json, name=values" })
  values?: string[];
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TextValues
/** 
 * List of text values.
**/
export class TextValues extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=values" })
  values?: string[];
}

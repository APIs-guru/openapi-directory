import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Text } from "./text";



// TextList
/** 
 * Wrapper for Text List Field value.
**/
export class TextList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=values", elemType: Text })
  values?: Text[];
}

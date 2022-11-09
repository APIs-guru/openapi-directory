import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Text } from "./text";


// TextList
/** 
 * Wrapper for Text List Field value.
**/
export class TextList extends SpeakeasyBase {
  @Metadata({ data: "json, name=values", elemType: shared.Text })
  values?: Text[];
}

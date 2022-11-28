import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// StringList
/** 
 * A metric value representing a list of strings.
**/
export class StringList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=elements" })
  elements?: string[];
}

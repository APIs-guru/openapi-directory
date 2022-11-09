import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// StringList
/** 
 * A metric value representing a list of strings.
**/
export class StringList extends SpeakeasyBase {
  @Metadata({ data: "json, name=elements" })
  elements?: string[];
}

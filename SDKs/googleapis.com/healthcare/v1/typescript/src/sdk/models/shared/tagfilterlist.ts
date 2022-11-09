import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TagFilterList
/** 
 * List of tags to be filtered.
**/
export class TagFilterList extends SpeakeasyBase {
  @Metadata({ data: "json, name=tags" })
  tags?: string[];
}

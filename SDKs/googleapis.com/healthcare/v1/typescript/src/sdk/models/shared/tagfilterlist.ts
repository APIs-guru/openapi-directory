import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TagFilterList
/** 
 * List of tags to be filtered.
**/
export class TagFilterList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string[];
}

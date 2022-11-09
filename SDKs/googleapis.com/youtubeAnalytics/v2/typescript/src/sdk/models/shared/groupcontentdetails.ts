import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GroupContentDetails
/** 
 * A group's content details.
**/
export class GroupContentDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=itemCount" })
  itemCount?: string;

  @Metadata({ data: "json, name=itemType" })
  itemType?: string;
}

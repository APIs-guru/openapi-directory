import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GroupContentDetails
/** 
 * A group's content details.
**/
export class GroupContentDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=itemCount" })
  itemCount?: string;

  @SpeakeasyMetadata({ data: "json, name=itemType" })
  itemType?: string;
}

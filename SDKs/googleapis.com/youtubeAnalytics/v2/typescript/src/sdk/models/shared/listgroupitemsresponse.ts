import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Errors } from "./errors";
import { GroupItem } from "./groupitem";



// ListGroupItemsResponse
/** 
 * Response message for GroupsService.ListGroupItems.
**/
export class ListGroupItemsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors" })
  errors?: Errors;

  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=items", elemType: GroupItem })
  items?: GroupItem[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;
}

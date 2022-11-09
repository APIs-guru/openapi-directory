import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Errors } from "./errors";
import { GroupItem } from "./groupitem";


// ListGroupItemsResponse
/** 
 * Response message for GroupsService.ListGroupItems.
**/
export class ListGroupItemsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors" })
  errors?: Errors;

  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=items", elemType: shared.GroupItem })
  items?: GroupItem[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;
}

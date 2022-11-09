import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Errors } from "./errors";
import { Group } from "./group";


// ListGroupsResponse
/** 
 * Response message for GroupsService.ListGroups.
**/
export class ListGroupsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors" })
  errors?: Errors;

  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=items", elemType: shared.Group })
  items?: Group[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}

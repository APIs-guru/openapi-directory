import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Group } from "./group";


// SearchGroupsResponse
/** 
 * The response message for GroupsService.SearchGroups.
**/
export class SearchGroupsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=groups", elemType: shared.Group })
  groups?: Group[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}

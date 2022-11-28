import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Group } from "./group";



// SearchGroupsResponse
/** 
 * The response message for GroupsService.SearchGroups.
**/
export class SearchGroupsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=groups", elemType: Group })
  groups?: Group[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}

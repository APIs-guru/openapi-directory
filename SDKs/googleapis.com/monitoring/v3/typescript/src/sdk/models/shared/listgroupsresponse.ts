import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Group } from "./group";


// ListGroupsResponse
/** 
 * The ListGroups response.
**/
export class ListGroupsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=group", elemType: shared.Group })
  group?: Group[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Group } from "./group";



// ListGroupsResponse
/** 
 * Response message for 'ListGroups' request.
**/
export class ListGroupsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=groups", elemType: Group })
  groups?: Group[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=unreachable" })
  unreachable?: string[];
}

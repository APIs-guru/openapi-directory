import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Group } from "./group";


// ListGroupsResponse
/** 
 * Response message for 'ListGroups' request.
**/
export class ListGroupsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=groups", elemType: shared.Group })
  groups?: Group[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=unreachable" })
  unreachable?: string[];
}

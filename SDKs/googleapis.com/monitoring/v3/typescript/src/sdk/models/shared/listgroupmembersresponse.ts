import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { MonitoredResource } from "./monitoredresource";


// ListGroupMembersResponse
/** 
 * The ListGroupMembers response.
**/
export class ListGroupMembersResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=members", elemType: shared.MonitoredResource })
  members?: MonitoredResource[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=totalSize" })
  totalSize?: number;
}

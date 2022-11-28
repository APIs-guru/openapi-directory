import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MonitoredResource } from "./monitoredresource";



// ListGroupMembersResponse
/** 
 * The ListGroupMembers response.
**/
export class ListGroupMembersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=members", elemType: MonitoredResource })
  members?: MonitoredResource[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=totalSize" })
  totalSize?: number;
}

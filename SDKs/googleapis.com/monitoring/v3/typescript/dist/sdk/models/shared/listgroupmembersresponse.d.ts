import { SpeakeasyBase } from "../../../internal/utils";
import { MonitoredResource } from "./monitoredresource";
/**
 * The ListGroupMembers response.
**/
export declare class ListGroupMembersResponse extends SpeakeasyBase {
    members?: MonitoredResource[];
    nextPageToken?: string;
    totalSize?: number;
}

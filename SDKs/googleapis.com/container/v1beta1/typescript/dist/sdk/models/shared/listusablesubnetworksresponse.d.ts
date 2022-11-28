import { SpeakeasyBase } from "../../../internal/utils";
import { UsableSubnetwork } from "./usablesubnetwork";
/**
 * ListUsableSubnetworksResponse is the response of ListUsableSubnetworksRequest.
**/
export declare class ListUsableSubnetworksResponse extends SpeakeasyBase {
    nextPageToken?: string;
    subnetworks?: UsableSubnetwork[];
}

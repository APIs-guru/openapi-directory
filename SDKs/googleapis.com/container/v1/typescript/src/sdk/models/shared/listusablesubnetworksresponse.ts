import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UsableSubnetwork } from "./usablesubnetwork";



// ListUsableSubnetworksResponse
/** 
 * ListUsableSubnetworksResponse is the response of ListUsableSubnetworksRequest.
**/
export class ListUsableSubnetworksResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=subnetworks", elemType: UsableSubnetwork })
  subnetworks?: UsableSubnetwork[];
}

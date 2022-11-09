import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { UsableSubnetwork } from "./usablesubnetwork";


// ListUsableSubnetworksResponse
/** 
 * ListUsableSubnetworksResponse is the response of ListUsableSubnetworksRequest.
**/
export class ListUsableSubnetworksResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=subnetworks", elemType: shared.UsableSubnetwork })
  subnetworks?: UsableSubnetwork[];
}

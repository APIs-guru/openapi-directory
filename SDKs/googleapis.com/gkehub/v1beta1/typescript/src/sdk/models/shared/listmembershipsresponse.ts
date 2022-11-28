import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Membership } from "./membership";



// ListMembershipsResponse
/** 
 * Response message for the `GkeHubMembershipService.ListMemberships` method.
**/
export class ListMembershipsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=resources", elemType: Membership })
  resources?: Membership[];

  @SpeakeasyMetadata({ data: "json, name=unreachable" })
  unreachable?: string[];
}

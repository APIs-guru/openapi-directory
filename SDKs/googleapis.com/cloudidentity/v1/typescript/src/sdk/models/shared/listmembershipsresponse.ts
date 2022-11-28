import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Membership } from "./membership";



// ListMembershipsResponse
/** 
 * The response message for MembershipsService.ListMemberships.
**/
export class ListMembershipsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=memberships", elemType: Membership })
  memberships?: Membership[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}

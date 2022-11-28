import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GuestPolicy } from "./guestpolicy";



// ListGuestPoliciesResponse
/** 
 * A response message for listing guest policies.
**/
export class ListGuestPoliciesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=guestPolicies", elemType: GuestPolicy })
  guestPolicies?: GuestPolicy[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}

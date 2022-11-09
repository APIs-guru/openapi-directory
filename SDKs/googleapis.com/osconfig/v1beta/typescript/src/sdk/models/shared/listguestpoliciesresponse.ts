import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GuestPolicy } from "./guestpolicy";


// ListGuestPoliciesResponse
/** 
 * A response message for listing guest policies.
**/
export class ListGuestPoliciesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=guestPolicies", elemType: shared.GuestPolicy })
  guestPolicies?: GuestPolicy[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}

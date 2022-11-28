import { SpeakeasyBase } from "../../../internal/utils";
import { GuestPolicy } from "./guestpolicy";
/**
 * A response message for listing guest policies.
**/
export declare class ListGuestPoliciesResponse extends SpeakeasyBase {
    guestPolicies?: GuestPolicy[];
    nextPageToken?: string;
}

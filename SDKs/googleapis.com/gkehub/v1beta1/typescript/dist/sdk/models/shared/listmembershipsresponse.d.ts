import { SpeakeasyBase } from "../../../internal/utils";
import { Membership } from "./membership";
/**
 * Response message for the `GkeHubMembershipService.ListMemberships` method.
**/
export declare class ListMembershipsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    resources?: Membership[];
    unreachable?: string[];
}
